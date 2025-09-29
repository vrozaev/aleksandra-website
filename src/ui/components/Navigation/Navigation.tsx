import React from "react";
import styles from "./Navigation.module.css";
import { Link } from "../Link/Link";

export const Navigation: React.FC = () => {
    return (
        <nav className={styles.navigation}>
            <Link className={styles.navigation__link} href='/'>Home</Link>
            <Link className={styles.navigation__link} href='/projects'>Projects</Link>
            <Link className={styles.navigation__link} href='/services'>Services</Link>
            <Link className={styles.navigation__link} href='/about'>About</Link>
            <Link className={styles.navigation__link} href='/contact'>Contact</Link>
        </nav>
    );
};