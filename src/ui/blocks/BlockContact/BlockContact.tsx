import React from "react";
import styles from './BlockContact.module.css';
import { Link } from "@/ui/components/Link/Link";

export const BlockContact: React.FC = () => {
    return (
        <div className={styles.blockContact}>
            <div className={styles.blockContact__row}>
                <div className={styles.blockContact__rowLabel}>Email:</div>
                <Link className={styles.blockContact__rowValue} href='mailto:alexandra090593@gmail.com' view='footer'>alexandra090593@gmail.com</Link>
            </div>
            <div className={styles.blockContact__row}>
                <div className={styles.blockContact__rowLabel}>Instagram:</div>
                <Link className={styles.blockContact__rowValue} href='https://www.instagram.com/sanchita_arch' view='footer'>sanchita_arch</Link>
            </div>
            <div className={styles.blockContact__row}>
                <div className={styles.blockContact__rowLabel}>Whataspp:</div>
                <Link className={styles.blockContact__rowValue} href='https://wa.me/31645354483' view='footer'>+31 6 45 35 44 83</Link>
            </div>
            <div className={styles.blockContact__row}>
                <div className={styles.blockContact__rowLabel}>Phone:</div>
                <Link className={styles.blockContact__rowValue} href='tel:+4733378901' view='footer'>+31 6 45 35 44 83</Link>
            </div>
        </div>
    );
};