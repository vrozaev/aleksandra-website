import React from "react";
import styles from './BlockContact.module.css';
import { Link } from "@/ui/components/Link/Link";
import { Text } from "@/ui/components/Text/Text";

export const BlockContact: React.FC = () => {
    return (
        <section className={styles['block-contact']}>
            <div className={styles['block-contact__intro']}>
                <Text variant="label" className={styles['block-contact__eyebrow']}>Start a project</Text>
                <Text as="h2" variant="pageTitle" className={styles['block-contact__title']}>
                    Let&apos;s create a space that feels like <span className={styles['block-contact__marked']}>yours.</span>
                </Text>
                <Text variant="body" className={styles['block-contact__copy']}>
                    Tell us about your space, your ideas, and what you would like to change.
                    We would love to hear from you.
                </Text>
            </div>

            <div className={styles['block-contact__links']}>
                <Link
                    className={styles['block-contact__link']}
                    href='mailto:contact@formaebureau.nl'
                >
                    <Text as="span" variant="label" className={styles['block-contact__label']}>Email</Text>
                    <Text as="span" variant="contactValue" className={styles['block-contact__value']}>contact@formaebureau.nl</Text>
                    <Text as="span" variant="icon" className={styles['block-contact__arrow']} aria-hidden='true'>↗</Text>
                </Link>
                <Link
                    className={styles['block-contact__link']}
                    href='https://www.instagram.com/formae.bureau?rpxt=MWcxM2FldHF0eGdjdA'
                    target='_blank'
                    rel='noreferrer'
                >
                    <Text as="span" variant="label" className={styles['block-contact__label']}>Social</Text>
                    <Text as="span" variant="contactValue" className={styles['block-contact__value']}>Instagram</Text>
                    <Text as="span" variant="icon" className={styles['block-contact__arrow']} aria-hidden='true'>↗</Text>
                </Link>
                <Link
                    className={styles['block-contact__link']}
                    href='https://www.linkedin.com/company/form%C3%A6-bureau/posts/?viewAsMember=true'
                    target='_blank'
                    rel='noreferrer'
                >
                    <Text as="span" variant="label" className={styles['block-contact__label']}>Network</Text>
                    <Text as="span" variant="contactValue" className={styles['block-contact__value']}>LinkedIn</Text>
                    <Text as="span" variant="icon" className={styles['block-contact__arrow']} aria-hidden='true'>↗</Text>
                </Link>
            </div>
        </section>
    );
};
