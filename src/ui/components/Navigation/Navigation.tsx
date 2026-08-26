'use client';
import React, { useCallback, useState } from "react";
import styles from "./Navigation.module.css";
import { Link } from "../Link/Link";
import { MenuIcon } from "../icons/MenuIcon";
import { CrossIcon } from "../icons/CrossIcon";
import Image from "next/image";

const logo = (
    <Link className={styles['navigation__logo']} href='/' aria-label='Formae Bureau home'>
        <Image
            className={styles['navigation__logo-image']}
            src='/aleksandra-website/images/formae-bureau-logo-transparent.webp'
            alt='Formae Bureau'
            width={1375}
            height={507}
            priority
        />
    </Link>
);

export const Navigation: React.FC = () => {
    const [isVisible, setVisible] = useState(false);

    const onClick = useCallback(() => {
        setVisible(!isVisible);
    }, [isVisible])

    return (
        <nav className={styles['navigation']}>
            <nav className={styles['navigation__desktop']}>
                {logo}
                <div className={styles['navigation__links']}>
                    <Link className={styles['navigation__link']} href='/'>Home</Link>
                    <Link className={styles['navigation__link']} href='/projects'>Projects</Link>
                    <Link className={styles['navigation__link']} href='/services'>Services</Link>
                    <Link className={styles['navigation__link']} href='/about'>About</Link>
                    <Link className={styles['navigation__link']} href='/contact'>Contact</Link>
                </div>
            </nav>
            <div className={styles['navigation__mobile']}>
                {logo}
                 {
                    isVisible ? (
                        <nav className={styles['navigation__mobile-modal']}>             
                            <Link className={styles['navigation__mobile-link']} href='/' onClick={onClick}>Home</Link>
                            <Link className={styles['navigation__mobile-link']} href='/projects' onClick={onClick}>Projects</Link>
                            <Link className={styles['navigation__mobile-link']} href='/services' onClick={onClick}>Services</Link>
                            <Link className={styles['navigation__mobile-link']} href='/about' onClick={onClick}>About</Link>
                            <Link className={styles['navigation__mobile-link']} href='/contact' onClick={onClick}>Contact</Link>
                        </nav>
                    ) : null
                }
                { isVisible ? <CrossIcon className={styles['navigation__cta-icon']} onClick={onClick} /> : <MenuIcon className={styles['navigation__cta-icon']} onClick={onClick} />}
            </div>
        </nav>
    );
};
