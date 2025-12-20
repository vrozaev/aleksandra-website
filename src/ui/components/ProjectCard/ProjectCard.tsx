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
    onClick?: () => void;
};

export const ProjectCard: React.FC<ProjectCardProps> = ({href, name, image, onClick}) => {
    return (
        <Link href={href || image}>
            <div className={cc(styles['project-card'])} onClick={onClick}>
                <div className={styles['project-card__image-wrapper']}>
                    <Image className={styles['project-card__image']} src={image} alt='' fill objectFit='cover' />
                </div>
                { name ? <Text className={styles['project-card__name']} variant="body">{name}</Text> : null }
            </div>
        </Link>
    );
};
