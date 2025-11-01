import { Text } from "@/ui/components/Text/Text";
import styles from "./page.module.css";
import { ProjectBlock } from "@/ui/blocks/ProjectBlock/ProjectBlock";
import { PROJECTS_LIST } from "@/shared/projects";

export async function generateStaticParams() {
  return PROJECTS_LIST.map(({slug}) => ({slug}));
}

export default async function ProjectPage({params}: {params: Promise<{slug: string}>}) {
  const {slug} = await params;

  const project = PROJECTS_LIST.find((project) => project.slug === slug)!;

  return (
    <div className={styles.page}>
      <Text variant='h2' className={styles.page__title}>{slug}</Text>
      <main>
            <ProjectBlock project={project} />
      </main>
    </div>
  );
}
