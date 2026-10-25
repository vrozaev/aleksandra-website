import React from "react";
import { Text } from "@/ui/components/Text/Text";
import { cc } from "../utils/cc";
import styles from "./Page.module.css";

const MAX_WIDTH_OPTIONS = {
    'm': '1120px',
    'l': '1600px',
} as const;

type PageProps = {
    title?: string;
    className?: string;
    children: React.ReactNode;
    maxWidth: keyof typeof MAX_WIDTH_OPTIONS;
};

export const Page: React.FC<PageProps> = ({
    title,
    className,
    children,
    maxWidth,
}) => {
    return (
        <main
            id="main-content"
            tabIndex={-1}
            className={cc(styles['page'], className)}
            style={{maxWidth: MAX_WIDTH_OPTIONS[maxWidth]}}
        >
            {title ? <Text variant='h1' className={styles['page__title']}>{title.toUpperCase()}</Text> : null}
            {children}
        </main>
    );
};
