import React from "react";
import styles from './Button.module.css';
import { Link } from "../Link/Link";
import { cc } from "../utils/cc";
import { Text } from "../Text/Text";

type ButtonProps = {
    children: React.ReactNode;
    className?: string;
    href?: string;
};

export const Button: React.FC<ButtonProps> = ({children, href, className}) => {
    const buttonClassName = cc(styles['button'], styles['button_view_cta'], className);

    if (href) {
        return <Link className={buttonClassName} href={href}><Text as="span" variant="label">{children}</Text><Text as="span" variant="iconButton" aria-hidden='true'>↗</Text></Link>;
    }

    return <button type='button' className={buttonClassName}><Text as="span" variant="label">{children}</Text><Text as="span" variant="iconButton" aria-hidden='true'>↗</Text></button>;
};
