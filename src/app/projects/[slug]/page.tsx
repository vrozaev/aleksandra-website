import styles from "./page.module.css";
import { BlockProject } from "@/ui/blocks/BlockProject/BlockProject";
import { PROJECTS_LIST } from "@/shared/projects";

export async function generateStaticParams() {
  return PROJECTS_LIST.map(({slug}) => ({slug}));
}

export default async function ProjectPage({params}: {params: Promise<{slug: string}>}) {
  const {slug} = await params;

  const project = PROJECTS_LIST.find((project) => project.slug === slug)!;

  return (
    <div className={styles['page']}>
      <main>
            <BlockProject project={project} />
      </main>
    </div>
  );
}
