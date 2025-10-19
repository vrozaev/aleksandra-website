import React from "react";
import styles from './Button.module.css';
import { Link } from "../Link/Link";
import { cc } from "../utils/cc";

type ButtonProps = {
    children: React.ReactNode;
    className?: string;
    href?: string;
};

export const Button: React.FC<ButtonProps> = ({children, href, className}) => {
    const jsx = (
        <button className={cc(styles.button, styles.button_view_cta, className)}>{children}</button>
    );

    if (href) {
        return <Link href={href}>{jsx}</Link>
    }

    return jsx;
};