import { Text } from "@/ui/components/Text/Text";
import styles from "./page.module.css";
import { BlockContact } from "@/ui/blocks/BlockContact/BlockContact";
import { Spacer } from "@/ui/components/Spacer/Spacer";

export default function Contact() {
  return (
    <div className={styles['page']}>
      <Spacer size="m" />
      <Text variant='h2' className={styles['page__title']}>Contact</Text>
      <main>
        <BlockContact />
      </main>
    </div>
  );
}
