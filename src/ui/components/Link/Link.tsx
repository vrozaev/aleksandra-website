import React, { ComponentProps } from "react";
import NextLink from "next/link";
import styles from './Link.module.css';
import { cc } from "../utils/cc";

type LinkProps = ComponentProps<typeof NextLink>;

export const Link: React.FC<LinkProps> = ({className, ...rest}) => {
    return (
         <NextLink className={cc(styles.link, className)} {...rest} />
    );
}