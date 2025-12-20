import { Text } from "@/ui/components/Text/Text";
import { BlockProjects } from "@/ui/blocks/BlockProjects/BlockProjects";
import { PROJECTS_LIST } from "@/shared/projects";
import { Spacer } from "@/ui/components/Spacer/Spacer";
import { Page } from "@/ui/components/Page/Page";
import styles from "./page.module.css";

export default function Home() {
  return (
    <Page maxWidth="l">
        <div className={styles['page__main-block']}>
          <div className={styles['page__main-block-text-wrapper']}>
            <Text variant="h1">Aleksandra Borisova Studio</Text>
            <Text variant="h2">Interior design, supervision</Text>
          </div>
        </div>
        <Spacer size='m' />
        <Text variant='h2' className={styles['page__lastets-projects-title']}>Latest Projects</Text>
        <Spacer size='m' />
        <BlockProjects projects={PROJECTS_LIST} />
    </Page>
  );
}
