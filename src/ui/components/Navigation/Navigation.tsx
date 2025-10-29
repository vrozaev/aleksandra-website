'use client';
import React, { useCallback, useState } from "react";
import styles from "./Navigation.module.css";
import { Link } from "../Link/Link";
import { MenuIcon } from "../icons/MenuIcon";
import { CrossIcon } from "../icons/CrossIcon";

export const Navigation: React.FC = () => {
    const [isVisible, setVisible] = useState(false);

    const onClick = useCallback(() => {
        setVisible(!isVisible);
    }, [isVisible])

    return (
        <nav className={styles.navigation}>
            <nav className={styles.navigation__desktop}>
                <Link className={styles.navigation__link} href='/'>Home</Link>
                <Link className={styles.navigation__link} href='/projects'>Projects</Link>
                <Link className={styles.navigation__link} href='/services'>Services</Link>
                <Link className={styles.navigation__link} href='/about'>About</Link>
                <Link className={styles.navigation__link} href='/contact'>Contact</Link>
            </nav>
            <div className={styles.navigation__mobile}>             
                 {
                    isVisible ? (
                        <nav className={styles.navigation__mobileModal}>             
                            <Link className={styles.navigation__mobileLink} href='/' onClick={onClick}>Home</Link>
                            <Link className={styles.navigation__mobileLink} href='/projects' onClick={onClick}>Projects</Link>
                            <Link className={styles.navigation__mobileLink} href='/services' onClick={onClick}>Services</Link>
                            <Link className={styles.navigation__mobileLink} href='/about' onClick={onClick}>About</Link>
                            <Link className={styles.navigation__mobileLink} href='/contact' onClick={onClick}>Contact</Link>
                        </nav>
                    ) : null
                }
                { isVisible ? <CrossIcon className={styles.navigation__ctaIcon} onClick={onClick} /> : <MenuIcon className={styles.navigation__ctaIcon} onClick={onClick} />}
            </div>
        </nav>
    );
};