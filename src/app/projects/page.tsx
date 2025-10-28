import { Text } from "@/ui/components/Text/Text";
import styles from "./page.module.css";
import { BlockProjects } from "@/ui/blocks/BlockProjects/BlockProjects";

const PROJECTS = [
  {
    name: 'Project name',
    image: '/aleksandra-website/pages/about/about.webp',
    href: '/projects/project-name',
  },
  {
    name: 'Project name',
    image: '/aleksandra-website/pages/about/about.webp',
    href: '/projects/project-name',
  },
  {
    name: 'Project name',
    image: '/aleksandra-website/pages/about/about.webp',
    href: '/projects/project-name',
  },
  {
    name: 'Project name',
    image: '/aleksandra-website/pages/about/about.webp',
    href: '/projects/project-name',
  },
  {
    name: 'Project name',
    image: '/aleksandra-website/pages/about/about.webp',
    href: '/projects/project-name',
  },
    {
    name: 'Project name',
    image: '/aleksandra-website/pages/about/about.webp',
    href: '/projects/project-name',
  },
]

export default function Projects() {
  return (
    <div className={styles.page}>
      <Text variant='h2' className={styles.page__title}>Projects</Text>
      <main>
        <BlockProjects projects={PROJECTS} />
      </main>
    </div>
  );
}
