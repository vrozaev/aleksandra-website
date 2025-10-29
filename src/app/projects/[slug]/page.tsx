import { Text } from "@/ui/components/Text/Text";
import styles from "./page.module.css";
import { ProjectBlock } from "@/ui/blocks/ProjectBlock/ProjectBlock";
import type { ComponentProps } from "react";

export async function generateStaticParams() {
    return [
        { slug: 'project-1' },
    ];
}

const PROJECT: ComponentProps<typeof ProjectBlock> = {
    images: [],
    name: '',
    details: '', 
    description: [],
};

export default async function ProjectPage({params}: {params: Promise<{slug: string}>}) {
  const {slug} = await params;

  return (
    <div className={styles.page}>
      <Text variant='h2' className={styles.page__title}>{slug}</Text>
      <main>
            <ProjectBlock project={PROJECT} />
      </main>
    </div>
  );
}
