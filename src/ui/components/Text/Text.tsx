import React from 'react';
import styles from './Text.module.css';
import { cc } from '../utils/cc';

export type TextVariant = 'h1' | 'h2' | 'body';

type TextProps = {
    className?: string;
    variant: TextVariant;
    children: React.ReactNode;
};

export const Text: React.FC<TextProps> = ({children, variant, className,}) => {
    return (
        <span
            className={cc(styles[variant], className)}
        >
            {children}
        </span>
    );
};
