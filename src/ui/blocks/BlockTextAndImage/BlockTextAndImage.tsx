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
  <div className={styles.blockTextAndImage}>
    <div className={styles.blockTextAndImage__section}>
      <div className={styles.blockTextAndImage__imageWrapper}>
        <Image src={image} alt="about" fill objectFit="cover" />
      </div>
    </div>
    <div className={styles.blockTextAndImage__section}>
      {
        paragraphs.map((item, index) => (
          <Text variant='body' className={styles.blockTextAndImage__paragraph} key={index}>{item}</Text>
        ))
      }
    </div>
  </div>
);