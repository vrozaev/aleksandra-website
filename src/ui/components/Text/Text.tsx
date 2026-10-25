import React from 'react';
import styles from './Text.module.css';
import { cc } from '../utils/cc';

export type TextVariant =
    | 'h1'
    | 'h2'
    | 'body'
    | 'caption'
    | 'label'
    | 'eyebrow'
    | 'meta'
    | 'intro'
    | 'heroTitle'
    | 'display'
    | 'displayCount'
    | 'sectionTitle'
    | 'contentTitle'
    | 'pageTitle'
    | 'stageTitle'
    | 'closingTitle'
    | 'cardTitle'
    | 'contactValue'
    | 'email'
    | 'icon'
    | 'iconButton'
    | 'iconLarge'
    | 'iconClose';

type TextTag = 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span' | 'figcaption' | 'sup';

type TextProps = React.HTMLAttributes<HTMLElement> & {
    as?: TextTag;
    className?: string;
    variant: TextVariant;
    children: React.ReactNode;
};

export const Text: React.FC<TextProps> = ({children, variant, className, as, ...rest}) => {
    const Tag = as ?? (variant === 'h1' || variant === 'h2' ? variant : 'p');
    return (
        <Tag
            className={cc(styles.text, styles[variant], className)}
            {...rest}
        >
            {children}
        </Tag>
    );
};
