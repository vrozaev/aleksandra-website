import { Text } from "@/ui/components/Text/Text";
import styles from "./page.module.css";
import { BlockProjects } from "@/ui/blocks/BlockProjects/BlockProjects";
import { PROJECTS_LIST } from "@/shared/projects";
import { Spacer } from "@/ui/components/Spacer/Spacer";

export default function Home() {
  return (
    <div className={styles.page}>
      <main>
        <div className={styles.page__mainBlock}>
          <div className={styles.page__mainBlockTextWrapper}>
            <Text variant="h1">Aleksandra Borisova Studio</Text>
            <Text variant="h2">Interior design, supervision</Text>
          </div>
        </div>
        <Spacer size='m' />
        <Text variant='h2' className={styles.page__lastetsProjectsTitle}>Latest Projects</Text>
        <Spacer size='m' />
        <BlockProjects projects={PROJECTS_LIST} />
      </main>
    </div>
  );
}
