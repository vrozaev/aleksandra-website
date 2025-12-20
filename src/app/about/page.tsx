import { Button } from "@/ui/components/Button/Button";
import { BlockTextAndImage } from "@/ui/blocks/BlockTextAndImage/BlockTextAndImage";
import { Link } from "@/ui/components/Link/Link";
import { Page } from "@/ui/components/Page/Page";
import { ABOUT_PAGE } from "@/shared/content";
import styles from './about.module.css';

export default function About() {
  return (
    <Page title={ABOUT_PAGE.title} maxWidth="m">
        <BlockTextAndImage 
          image={ABOUT_PAGE.image}
          paragraphs={ABOUT_PAGE.paragraphs}
        />
        <Link href='/contact'><Button className={styles['about__cta']}>Get in touch</Button></Link>
    </Page>
  );
}
