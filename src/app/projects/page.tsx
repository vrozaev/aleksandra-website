import { Text } from "@/ui/components/Text/Text";
import styles from "./page.module.css";
import { BlockProjects } from "@/ui/blocks/BlockProjects/BlockProjects";
import { PROJECTS_LIST } from "@/shared/projects";

export default function Projects() {
  return (
    <div className={styles.page}>
      <Text variant='h2' className={styles.page__title}>Projects</Text>
      <main>
        <BlockProjects projects={PROJECTS_LIST} />
      </main>
    </div>
  );
}
PROJECTS_LIST