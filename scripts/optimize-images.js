const fs = require("fs/promises");
const path = require("path");
const sharp = require("sharp");

const ROOT = path.resolve("public");
const MAX_SIZE = 2400;
const QUALITY = 82;
const SUPPORTED_EXTENSIONS = new Set([
  ".avif",
  ".heic",
  ".heif",
  ".jpeg",
  ".jpg",
  ".png",
  ".tif",
  ".tiff",
  ".webp",
]);

async function collectImages(directory) {
  const entries = await fs.readdir(directory, { withFileTypes: true });
  const nestedFiles = await Promise.all(entries.map(async (entry) => {
    const entryPath = path.join(directory, entry.name);
    if (entry.isDirectory()) return collectImages(entryPath);
    if (!entry.isFile()) return [];
    return SUPPORTED_EXTENSIONS.has(path.extname(entry.name).toLowerCase()) ? [entryPath] : [];
  }));

  return nestedFiles.flat();
}

function getDefaultTarget(source) {
  return path.join(path.dirname(source), `${path.basename(source, path.extname(source))}.webp`);
}

function getTargets(sources) {
  const groupedTargets = new Map();

  for (const source of sources.filter((file) => path.extname(file).toLowerCase() !== ".webp")) {
    const target = getDefaultTarget(source).toLowerCase();
    const group = groupedTargets.get(target) ?? [];
    group.push(source);
    groupedTargets.set(target, group);
  }

  return new Map(sources.map((source) => {
    const defaultTarget = getDefaultTarget(source);
    const collisions = groupedTargets.get(defaultTarget.toLowerCase()) ?? [];
    const sourceIsWebp = path.extname(source).toLowerCase() === ".webp";

    if (collisions.length === 1 || sourceIsWebp) {
      return [source, defaultTarget];
    }

    const sourceExtension = path.extname(source).slice(1).toLowerCase();
    const target = path.join(
      path.dirname(source),
      `${path.basename(source, path.extname(source))}-${sourceExtension}.webp`,
    );
    return [source, target];
  }));
}

function formatBytes(bytes) {
  if (bytes < 1024 * 1024) return `${Math.round(bytes / 1024)} KB`;
  return `${(bytes / 1024 / 1024).toFixed(1)} MB`;
}

async function optimizeImage(source, target) {
  const sourceStats = await fs.stat(source);
  const metadata = await sharp(source).metadata();
  const sourceIsWebp = path.extname(source).toLowerCase() === ".webp";
  const needsResize = Math.max(metadata.width ?? 0, metadata.height ?? 0) > MAX_SIZE;
  const hasMetadata = Boolean(metadata.exif || metadata.xmp || metadata.iptc);

  if (sourceIsWebp && !needsResize && !hasMetadata) {
    return { status: "skipped", sourceBytes: sourceStats.size, outputBytes: sourceStats.size };
  }

  const relativeSource = path.relative(process.cwd(), source);
  const relativeTarget = path.relative(process.cwd(), target);

  const temporaryTarget = path.join(
    path.dirname(target),
    `.${path.basename(target)}.${process.pid}.tmp`,
  );

  try {
    await sharp(source)
      .rotate()
      .resize({
        width: MAX_SIZE,
        height: MAX_SIZE,
        fit: "inside",
        withoutEnlargement: true,
      })
      .toColourspace("srgb")
      .webp({ quality: QUALITY, effort: 6, smartSubsample: true })
      .toFile(temporaryTarget);

    await fs.rename(temporaryTarget, target);
    if (source !== target) await fs.unlink(source);

    const outputStats = await fs.stat(target);
    console.log(`${relativeSource} -> ${relativeTarget} (${formatBytes(sourceStats.size)} -> ${formatBytes(outputStats.size)})`);
    return { status: "optimized", sourceBytes: sourceStats.size, outputBytes: outputStats.size };
  } catch (error) {
    await fs.rm(temporaryTarget, { force: true });
    throw error;
  }
}

async function main() {
  const sources = (await collectImages(ROOT)).sort((first, second) => first.localeCompare(second));
  const targets = getTargets(sources);
  const results = [];

  for (const source of sources) {
    results.push(await optimizeImage(source, targets.get(source)));
  }

  const optimized = results.filter((result) => result.status === "optimized").length;
  const skipped = results.filter((result) => result.status === "skipped").length;
  const sourceBytes = results.reduce((sum, result) => sum + result.sourceBytes, 0);
  const outputBytes = results.reduce((sum, result) => sum + result.outputBytes, 0);

  console.log(`\nOptimized: ${optimized}; already optimized: ${skipped}`);
  console.log(`Total: ${formatBytes(sourceBytes)} -> ${formatBytes(outputBytes)}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
