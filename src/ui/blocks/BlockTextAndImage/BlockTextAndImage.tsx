import { Text } from "@/ui/components/Text/Text";
import styles from './BlockTextAndImage.module.css';
import Image from "next/image";

type BlockTextAndImageProps = {
  image: string;
  paragraphs: string[];
};

export const BlockTextAndImage: React.FC<BlockTextAndImageProps> = ({
  image,
  paragraphs,
}) => (
  <div className={styles['block-text-and-image']}>
    <div className={styles['block-text-and-image__section']}>
      <div className={styles['block-text-and-image__image-wrapper']}>
        <Image src={image} alt="about" fill objectFit="cover" />
      </div>
    </div>
    <div className={styles['block-text-and-image__section']}>
      {
        paragraphs.map((item, index) => (
          <Text variant='body' className={styles['block-text-and-image__paragraph']} key={index}>{item}</Text>
        ))
      }
    </div>
  </div>
);
