'use client';
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
    const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (!onClick) return;
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            onClick();
        }
    };

    const content = (
        <div
            className={cc(styles['project-card'], onClick ? styles['project-card_clickable'] : '' )}
            onClick={onClick}
            onKeyDown={handleKeyDown}
        >
            <div className={styles['project-card__image-wrapper']}>
                <Image className={styles['project-card__image']} src={image} alt='' fill objectFit='cover' />
            </div>
            { name ? <Text className={styles['project-card__name']} variant="body">{name}</Text> : null }
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
