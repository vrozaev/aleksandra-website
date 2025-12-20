import React from "react";
import styles from './BlockContact.module.css';
import { Link } from "@/ui/components/Link/Link";

export const BlockContact: React.FC = () => {
    return (
        <div className={styles['block-contact']}>
            <div className={styles['block-contact__row']}>
                <Link href='mailto:alexandra090593@gmail.com' view='footer'>alexandra090593@gmail.com</Link>
            </div>
            <div className={styles['block-contact__row']}>
                <Link href='https://wa.me/31645354483' view='footer'>+31 6 45 35 44 83</Link>
            </div>
        </div>
    );
};
