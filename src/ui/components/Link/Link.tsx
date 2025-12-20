import React, { ComponentProps } from "react";
import NextLink from "next/link";
import styles from './Link.module.css';
import { cc } from "../utils/cc";

type LinkProps = ComponentProps<typeof NextLink> & {view?: 'footer'};

export const Link: React.FC<LinkProps> = ({className, view, ...rest}) => {
    return (
         <NextLink className={cc(styles['link'], className, view === 'footer' && styles['link_footer'])} {...rest} />
    );
}
