import { Text } from "@/ui/components/Text/Text";
import styles from "./page.module.css";
import { BlockContact } from "@/ui/blocks/BlockContact/BlockContact";

export default function Contact() {
  return (
    <div className={styles.page}>
      <Text variant='h2' className={styles.page__title}>Let's get in touch</Text>
      <main>
        <BlockContact />
      </main>
    </div>
  );
}

