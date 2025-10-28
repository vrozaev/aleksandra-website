import React from "react";
import { Text } from "../Text/Text";
import styles from './ProjectCard.module.css';
import { cc } from "../utils/cc";
import { Link } from "../Link/Link";

type ProjectCardProps = {
    name: string;
    image: string;
    href: string;
    className?: string;
};

export const ProjectCard: React.FC<ProjectCardProps> = ({name, image, className, href}) => {
    return (
        <Link href={href}>
            <div className={cc(styles.projectCard, className)}>
                <img className={styles.projectCard__image} src={image}></img>
                <Text className={styles.projectCard__name} variant="body">{name}</Text>
            </div>
        </Link>
    );
};