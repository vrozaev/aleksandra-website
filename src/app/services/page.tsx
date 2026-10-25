import { Button } from "@/ui/components/Button/Button";
import { BlockTextAndImage } from "@/ui/blocks/BlockTextAndImage/BlockTextAndImage";
import { Page } from "@/ui/components/Page/Page";
import { SERVICES_PAGE } from "@/shared/content";
import styles from './services.module.css';
import { Text } from "@/ui/components/Text/Text";
import { ServicesAccordion } from "@/ui/blocks/ServicesAccordion/ServicesAccordion";

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
          <Text as="h2" variant="sectionTitle" id="services-process-title" className={styles['services__process-title']}>Our services</Text>
          <ServicesAccordion services={SERVICES_PAGE.services} />
        </section>
        <div className={styles['services__closing']}>
          <Text variant="closingTitle">Every space starts with a conversation.</Text>
          <Button href='/contact'>Tell us about your project</Button>
        </div>
    </Page>
  );
}
