import React from "react";
import { Text } from "@/ui/components/Text/Text";
import { cc } from "../utils/cc";
import { Spacer } from "@/ui/components/Spacer/Spacer";
import styles from "./Page.module.css";

const MAX_WIDTH_OPTIONS = {
    'm': '1000px',
    'l': '1400px',
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
            className={cc(styles['page'], className)}
            style={{maxWidth: MAX_WIDTH_OPTIONS[maxWidth]}}
        >
            {title ? <Spacer size="m" /> : null}
            {title ? <Text variant='h2' className={styles['page__title']}>{title}</Text> : null}
            {title ? <Spacer size="m" /> : null}
            {children}
        </main>
    );
};
