import { Button } from "@/ui/components/Button/Button";
import { BlockTextAndImage } from "@/ui/blocks/BlockTextAndImage/BlockTextAndImage";
import { Page } from "@/ui/components/Page/Page";
import { SERVICES_PAGE } from "@/shared/content";
import styles from './services.module.css';
import { Text } from "@/ui/components/Text/Text";

export default function Services() {
  return (
    <Page title={SERVICES_PAGE.title} maxWidth="l">
        <BlockTextAndImage 
          image={SERVICES_PAGE.image}
          imageAlt="A light-filled dining space with natural wood furniture and soft curtains"
          caption="Spaces to live in / Considered in every detail"
          eyebrow="A complete approach to interiors"
          title="From the first idea to the final interior."
          paragraphs={SERVICES_PAGE.paragraphs}
        />
        <section className={styles['services__process']} aria-labelledby="services-process-title">
          <div className={styles['services__process-intro']}>
            <Text variant="label" className={styles['services__eyebrow']}>Our process</Text>
            <Text as="h2" variant="sectionTitle" id="services-process-title" className={styles['services__process-title']}>The idea.<br />The details.<br />The whole.</Text>
          </div>
          <ol className={styles['services__stages']}>
            {SERVICES_PAGE.stages.map((stage, index) => (
              <li className={styles['services__stage']} key={stage.title}>
                <Text as="span" variant="meta" className={styles['services__number']} aria-hidden="true">/ {String(index + 1).padStart(2, '0')}</Text>
                <div>
                  <Text as="h3" variant="stageTitle" className={styles['services__stage-title']}>{stage.title}</Text>
                  <Text variant="body" className={styles['services__stage-copy']}>{stage.description}</Text>
                </div>
              </li>
            ))}
          </ol>
        </section>
        <div className={styles['services__closing']}>
          <Text variant="closingTitle">Every space starts with a conversation.</Text>
          <Button href='/contact'>Tell us about your project</Button>
        </div>
    </Page>
  );
}
