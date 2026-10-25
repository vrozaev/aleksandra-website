import { BlockProjectsList } from "@/ui/blocks/BlockProjectsList/BlockProjectsList";
import { PROJECTS_LIST } from "@/shared/projects";
import { Page } from "@/ui/components/Page/Page";
import styles from './projects.module.css';
import { Text } from "@/ui/components/Text/Text";

export default function Projects() {
  return (
    <Page maxWidth="l">
      <header className={styles.header}>
        <Text as="h1" variant="display" className={styles.title}>Projects <Text as="span" variant="displayCount">({String(PROJECTS_LIST.length).padStart(2, '0')})</Text></Text>
        <Text variant="intro" className={styles.intro}>Spaces with character.<br />Designed around your life.</Text>
      </header>
      <BlockProjectsList projects={PROJECTS_LIST} />
    </Page>
  );
}
