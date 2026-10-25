"use client";

import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Link } from "../Link/Link";
import { Text } from "../Text/Text";
import styles from './Footer.module.css';

export const Footer: React.FC = () => {
    const pathname = usePathname();

    return (
    <footer className={styles.footer}>
        <div className={styles.inner}>
            {pathname !== '/contact' && <div className={styles.invitation}>
                <Text variant="eyebrow" className={styles.eyebrow}><span aria-hidden='true'>/</span> Have a project in mind?</Text>
                <div className={styles.invitationBody}>
                    <Text as="h2" variant="contentTitle" className={styles.title}>Let’s create a space that feels like yours.</Text>
                    <a className={styles.email} href='mailto:contact@formaebureau.nl'>
                        <Text as="span" variant="email">contact@formaebureau.nl</Text>
                        <Text as="span" variant="iconLarge" aria-hidden='true'>↗</Text>
                    </a>
                </div>
            </div>}
            <div className={styles.bottom}>
                <Link href='/' className={styles.logo} aria-label='Formae Bureau home'>
                    <Image
                        src='/aleksandra-website/images/formae-bureau-logo-transparent.webp'
                        alt='Formae Bureau'
                        width={1375}
                        height={507}
                        className={styles.logoImage}
                    />
                </Link>
                <Text variant="label" className={styles.location}>Interior design<br />The Netherlands</Text>
                <nav className={styles.socials} aria-label='Social media'>
                    <a href='https://www.instagram.com/formae.bureau?rpxt=MWcxM2FldHF0eGdjdA' target='_blank' rel='noreferrer'><Text as="span" variant="label">Instagram</Text> <Text as="span" variant="label" aria-hidden='true'>↗</Text></a>
                    <a href='https://www.linkedin.com/company/form%C3%A6-bureau/posts/?viewAsMember=true' target='_blank' rel='noreferrer'><Text as="span" variant="label">LinkedIn</Text> <Text as="span" variant="label" aria-hidden='true'>↗</Text></a>
                </nav>
                <Text variant="label" className={styles.copyright}>© Formae Bureau {new Date().getFullYear()}</Text>
            </div>
        </div>
    </footer>
    );
};
