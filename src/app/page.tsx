import Image from "next/image";
import Link from "next/link";
import { BlockProjectsList } from "@/ui/blocks/BlockProjectsList/BlockProjectsList";
import { PROJECTS_LIST } from "@/shared/projects";
import { Text } from "@/ui/components/Text/Text";
import styles from "./page.module.css";

const selectedProjects = [PROJECTS_LIST[5], PROJECTS_LIST[2], PROJECTS_LIST[6]];

export default function Home() {
  return (
    <main id="main-content" tabIndex={-1}>
      <section className={styles.hero} aria-labelledby="hero-title">
        <Image
          className={styles.heroImage}
          src="/aleksandra-website/pages/projects/006-purmerend/kitchen-2.webp"
          alt="A warm, richly textured kitchen and dining space in our Purmerend family home project"
          fill
          sizes="100vw"
          priority
        />
        <div className={styles.heroInner}>
          <div className={styles.heroContent}>
            <Text as="h1" variant="heroTitle" id="hero-title" className={styles.heroTitle}>
              Spaces with character.<br />
              Designed for <span className={styles.circled}>life.
                <svg viewBox="0 0 180 95" fill="none" aria-hidden="true">
                  <path d="M162 20C126-2 17 3 8 43c-12 49 133 52 159 15C189 27 95 4 37 17" />
                </svg>
              </span>
            </Text>
            <div className={styles.heroBottom}>
              <Text variant="meta">From the first idea<br />to the final interior.</Text>
              <a className={styles.heroLink} href="#selected-work"><Text as="span" variant="meta">Explore our work</Text> <Text as="span" variant="icon" aria-hidden="true">↓</Text></a>
              <Link className={styles.heroProject} href="/projects/006-purmerend">
                <Text as="span" variant="caption">Featured project / 06</Text>
                <Text as="span" variant="meta">Purmerend family home <Text as="span" variant="icon" aria-hidden="true">↗</Text></Text>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <div className={styles.container}>
        <section id="selected-work" className={styles.work} aria-labelledby="work-title">
          <div className={styles.sectionHeading}>
            <Text as="h2" variant="sectionTitle" id="work-title">Selected work</Text>
            <Link className={styles.textLink} href="/projects"><Text as="span" variant="meta">All projects</Text> <Text as="span" variant="icon" aria-hidden="true">↗</Text></Link>
          </div>
          <BlockProjectsList projects={selectedProjects} />
        </section>

        <section className={styles.introduction} aria-labelledby="intro-title">
          <div className={styles.introCopy}>
            <Text as="h2" variant="contentTitle" id="intro-title">Creating beauty<br />that works.</Text>
            <div className={styles.introDetails}>
              <Text variant="body">We are Formae Bureau, a full-service interior design studio. We bring architecture, materials and your personal story together to create spaces that feel right.</Text>
              <Link className={styles.textLink} href="/about"><Text as="span" variant="meta">Discover our approach</Text> <Text as="span" variant="icon" aria-hidden="true">↗</Text></Link>
            </div>
          </div>
        </section>

        <section className={styles.studio} aria-labelledby="studio-title">
          <div className={styles.studioImage}>
            <Image
              src="/aleksandra-website/pages/about/about-team.webp"
              alt="Marina and Aleksandra, the founders of Formae Bureau"
              fill
              sizes="(max-width: 767px) 100vw, 45vw"
            />
            <Text variant="caption">Marina & Aleksandra <span>/</span> Formae Bureau</Text>
          </div>
          <div className={styles.studioCopy}>
            <Text as="h2" variant="contentTitle" id="studio-title">Your space.<br />Our shared vision.</Text>
            <Text variant="body">From the first sketch to the final installation, we stay close to the process. Developing the concept, working with materials, sourcing furniture and overseeing the build.</Text>
            <Text variant="body">Making sure the idea works in the space, not just on paper.</Text>
            <Link className={styles.textLink} href="/services"><Text as="span" variant="meta">How we work</Text> <Text as="span" variant="icon" aria-hidden="true">↗</Text></Link>
            <svg className={styles.stroke} viewBox="0 0 420 145" fill="none" aria-hidden="true">
              <path d="M1 59C79 97 247-1 302 23c64 28-167 131-152 93 8-21 176-55 267-111" />
            </svg>
          </div>
        </section>
      </div>
    </main>
  );
}
