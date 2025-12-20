import { Text } from "@/ui/components/Text/Text";
import styles from "./page.module.css";
import { Button } from "@/ui/components/Button/Button";
import { BlockTextAndImage } from "@/ui/blocks/BlockTextAndImage/BlockTextAndImage";
import { Link } from "@/ui/components/Link/Link";
import { Spacer } from "@/ui/components/Spacer/Spacer";

const CTAButton: React.FC<{children: React.ReactNode;}> = ({children}) => (
  <Button className={styles['page__cta']}>{children}</Button>
);

const TEXT_AND_IMAGES_PROPS = {
  image: '/aleksandra-website/pages/about/about.webp',
  title: 'Aleksandra Borisova',
  paragraphs: [
    `TODO: paragraph 1.`,
    `TODO: paragraph 2.`,
    `TODO: paragraph 3.`,
  ],
}

export default function Services() {
  return (
    <div className={styles['page']}>
      <Spacer size="m" />
      <Text variant='h2' className={styles['page__title']}>SERVICES</Text>
      <Spacer size="m" />
      <main>
        <BlockTextAndImage 
          {...TEXT_AND_IMAGES_PROPS}
        />
        <Link href='/contact'><CTAButton>Get in touch</CTAButton></Link>
      </main>
    </div>
  );
}
