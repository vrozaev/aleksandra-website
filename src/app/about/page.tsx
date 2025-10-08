import { Text } from "@/ui/components/Text/Text";
import styles from "./page.module.css";
import { Button } from "@/ui/components/Button/Button";
import { BlockTextAndImage } from "@/ui/blocks/BlockTextAndImage/BlockTextAndImage";

const CTAButton: React.FC<{children: React.ReactNode;}> = ({children}) => (
  <Button className={styles.page__cta}>{children}</Button>
);

const TEXT_AND_IMAGES_PROPS = {
  image: '/pages/about/about.webp',
  title: 'Aleksandra Borisova',
  paragraphs: [
    `The founder and head interior designer of the Utrecht-based design studio.`,
    `I am dedicated to warm, elegant, and timeless designs, achieving a balance between functionality and aesthetics. 
          As an interior designer, I work closely with my clients to design bespoke and authentic solutions that truly reflect their unique style and personality.`,
    `Functionality and sustainability are at the core of our work. 
          Our studio has broad knowledge and understanding of materials. 
          We use tactile and natural materials such as stone, wood, and paint finishes to create unique and high-end design solutions.`,
  ],
}

export default function About() {
  return (
    <div className={styles.page}>
      <Text variant='h1' className={styles.page__title}>About</Text>
      <main>
        <BlockTextAndImage 
          {...TEXT_AND_IMAGES_PROPS}
        />
        <CTAButton>Get in touch</CTAButton>
      </main>
    </div>
  );
}
