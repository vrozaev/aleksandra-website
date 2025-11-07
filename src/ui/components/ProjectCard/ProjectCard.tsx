import React from "react";
import { Text } from "../Text/Text";
import styles from './ProjectCard.module.css';
import { cc } from "../utils/cc";
import { Link } from "../Link/Link";
import Image from "next/image";

type ProjectCardProps = {
    href?: string;
    name?: string;
    image: string;
};

export const ProjectCard: React.FC<ProjectCardProps> = ({href, name, image}) => {
    const content = (
        <div className={cc(styles.projectCard)}>
            <div className={styles.projectCard__imageWrapper}>
                <Image className={styles.projectCard__image} src={image} alt='' fill objectFit='cover' />
            </div>
            { name ? <Text className={styles.projectCard__name} variant="body">{name}</Text> : null }
        </div>
    );

    if (!href) {
        return content
    }

    return (
        <Link href={href}>
            {content}
        </Link>
    );
};