import styles from './BlockTextAndImage.module.css';
import Image from "next/image";
import { Text } from "@/ui/components/Text/Text";

type BlockTextAndImageProps = {
  image: string;
  imageAlt: string;
  caption?: string;
  eyebrow?: string;
  title?: string;
  paragraphs: string[];
};

export const BlockTextAndImage: React.FC<BlockTextAndImageProps> = ({
  image,
  imageAlt,
  caption,
  eyebrow,
  title,
  paragraphs,
}) => (
  <div className={styles['block-text-and-image']}>
    <figure className={styles['block-text-and-image__figure']}>
      <div className={styles['block-text-and-image__image-wrapper']}>
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes="(max-width: 799px) 90vw, 42vw"
          className={styles['block-text-and-image__image']}
        />
      </div>
      {caption && <Text as="figcaption" variant="caption" className={styles['block-text-and-image__caption']}>{caption}</Text>}
    </figure>
    <div className={styles['block-text-and-image__section']}>
      {eyebrow && <Text variant="label" className={styles['block-text-and-image__eyebrow']}>{eyebrow}</Text>}
      {title && <Text as="h2" variant="sectionTitle" className={styles['block-text-and-image__title']}>{title}</Text>}
      {
        paragraphs.map((item, index) => (
          <Text variant="body" className={styles['block-text-and-image__paragraph']} key={index}>{item}</Text>
        ))
      }
    </div>
  </div>
);
