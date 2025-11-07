import React from "react";
import styles from './Footer.module.css';
import { Link } from "../Link/Link";
import { Text } from "../Text/Text";

export const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer__columnsWrapper}>
                <div className={styles.footer__column}>
                    <div className={styles.footer__columnTitle}>Aleksandra Borisova Studio</div>
                    <Link href='mailto:alexandra090593@gmail.com' view='footer'>alexandra090593@gmail.com</Link>
                    <Link href='https://wa.me/31645354483' view='footer'>+31 6 45 35 44 83</Link>
                </div>
                <div className={styles.footer__column}>
                    <div className={styles.footer__columnTitle}>Follow us</div>
                    <Link href='https://www.instagram.com/sanchita_arch' view='footer'>Instagram</Link>
                </div>
            </div>
            <div className={styles.footer__copyright}>
                <Text variant="body">© Aleksandra Borisova Studio {new Date().getFullYear()}</Text>
            </div>
        </footer>
    );
};