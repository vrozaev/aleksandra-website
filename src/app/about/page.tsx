import { Text } from "@/ui/components/Text/Text";
import styles from "./page.module.css";
import { Button } from "@/ui/components/Button/Button";
import { BlockTextAndImage } from "@/ui/blocks/BlockTextAndImage/BlockTextAndImage";
import { Link } from "@/ui/components/Link/Link";
import { Spacer } from "@/ui/components/Spacer/Spacer";

const CTAButton: React.FC<{children: React.ReactNode;}> = ({children}) => (
  <Button className={styles.page__cta}>{children}</Button>
);

const TEXT_AND_IMAGES_PROPS = {
  image: '/aleksandra-website/pages/about/about.webp',
  title: 'Aleksandra Borisova',
  paragraphs: [
  `
    My name is Aleksandra — I’m the founder of interior design studio based in Utrecht, working across the Netherlands.
  `,
  `
    My background is in architecture. Since 2016, I’ve been designing private homes and office buildings, and from 2019 to 2022 I also worked in landscape architecture, creating urban public spaces.
      This blend of experiences helps me see each project as a whole — the home, its surroundings, and how they connect — allowing me to create spaces that feel natural, balanced, and truly lived in.
  `,
  `
    In the Netherlands, I founded my studio to focus on thoughtful interiors and renovation projects.
      I’m inspired by timeless design, craftsmanship, and the idea of sustainable living — and I’m happy to be part of this growing movement here.
  `
  ],
}

export default function About() {
  return (
    <div className={styles.page}>
      <Spacer size="m" />
      <Text variant='h2' className={styles.page__title}>Aleksandra Borisova</Text>
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
