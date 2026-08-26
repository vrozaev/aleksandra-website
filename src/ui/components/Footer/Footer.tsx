import React from "react";
import styles from './Footer.module.css';
import { Text } from "../Text/Text";

export const Footer: React.FC = () => {
    return (
        <footer className={styles['footer']}>
            <div className={styles['footer__copyright']}>
                <Text variant="body">© Formae Bureau {new Date().getFullYear()}</Text>
            </div>
        </footer>
    );
};
