import { Button } from "@/ui/components/Button/Button";
import { BlockTextAndImage } from "@/ui/blocks/BlockTextAndImage/BlockTextAndImage";
import { Link } from "@/ui/components/Link/Link";
import { Page } from "@/ui/components/Page/Page";
import { SERVICES_PAGE } from "@/shared/content";
import styles from './services.module.css';

export default function Services() {
  return (
    <Page title={SERVICES_PAGE.title} maxWidth="m">
        <BlockTextAndImage 
          image={SERVICES_PAGE.image}
          paragraphs={SERVICES_PAGE.paragraphs}
        />
        <Link href='/contact'><Button className={styles['services__cta']}>Get in touch</Button></Link>
    </Page>
  );
}
