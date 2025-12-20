import { Text } from "@/ui/components/Text/Text";
import styles from "./page.module.css";
import { BlockProjects } from "@/ui/blocks/BlockProjects/BlockProjects";
import { PROJECTS_LIST } from "@/shared/projects";
import { Spacer } from "@/ui/components/Spacer/Spacer";

export default function Projects() {
  return (
    <div className={styles['page']}>
      <Spacer size="m" />
      <Text variant='h2' className={styles['page__title']}>Projects</Text>
      <Spacer size="m" />
      <main>
        <BlockProjects projects={PROJECTS_LIST} />
      </main>
    </div>
  );
}
