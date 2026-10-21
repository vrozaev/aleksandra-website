import React from "react";
import styles from './BlockContact.module.css';
import { Link } from "@/ui/components/Link/Link";

export const BlockContact: React.FC = () => {
    return (
        <section className={styles['block-contact']}>
            <div className={styles['block-contact__intro']}>
                <p className={styles['block-contact__eyebrow']}>Start a project</p>
                <h1 className={styles['block-contact__title']}>
                    Let&apos;s create a space that feels like yours.
                </h1>
                <p className={styles['block-contact__copy']}>
                    Tell us about your space, your ideas, and what you would like to change.
                    We would love to hear from you.
                </p>
            </div>

            <div className={styles['block-contact__links']}>
                <Link
                    className={styles['block-contact__link']}
                    href='mailto:contact@formaebureau.nl'
                >
                    <span className={styles['block-contact__label']}>Email</span>
                    <span className={styles['block-contact__value']}>contact@formaebureau.nl</span>
                    <span className={styles['block-contact__arrow']} aria-hidden='true'>↗</span>
                </Link>
                <Link
                    className={styles['block-contact__link']}
                    href='https://www.instagram.com/formae.bureau?rpxt=MWcxM2FldHF0eGdjdA'
                    target='_blank'
                    rel='noreferrer'
                >
                    <span className={styles['block-contact__label']}>Social</span>
                    <span className={styles['block-contact__value']}>Instagram</span>
                    <span className={styles['block-contact__arrow']} aria-hidden='true'>↗</span>
                </Link>
                <Link
                    className={styles['block-contact__link']}
                    href='https://www.linkedin.com/company/form%C3%A6-bureau/posts/?viewAsMember=true'
                    target='_blank'
                    rel='noreferrer'
                >
                    <span className={styles['block-contact__label']}>Network</span>
                    <span className={styles['block-contact__value']}>LinkedIn</span>
                    <span className={styles['block-contact__arrow']} aria-hidden='true'>↗</span>
                </Link>
            </div>
        </section>
    );
};
