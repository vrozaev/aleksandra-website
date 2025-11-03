const fs = require("fs");
const path = require("path");

const dir = path.join(__dirname, "../public/pages/projects");
const projects = fs.readdirSync(dir, { withFileTypes: true });

for (const project of projects) {
  if (project.isFile()) {
    continue;
  }

  const dir = path.join(__dirname, `../public/pages/projects/${project.name}`);
  const images = fs
                    .readdirSync(dir)
                    .filter((file) => file !== 'images.json')
                    .map(file => `/aleksandra-website/pages/projects/${project.name}/${file}`);

  fs.writeFileSync(
    path.join(__dirname, `../public/pages/projects/${project.name}/images.json`),
    JSON.stringify(images, null, 2)
  );
}

console.log("Updated images.json:", projects.length);
