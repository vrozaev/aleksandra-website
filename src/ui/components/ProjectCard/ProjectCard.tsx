'use client';

import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from './ProjectCard.module.css';
import { Text } from "../Text/Text";

type ProjectCardProps = {
    href?: string;
    name?: string;
    details?: string;
    image: string;
    index?: number;
    imageAlt?: string;
    onClick?: () => void;
};

export const ProjectCard: React.FC<ProjectCardProps> = ({href, name, details, image, index, imageAlt, onClick}) => {
    const content = (
        <>
            {name ? (
                <div className={styles['project-card__heading']}>
                    {index !== undefined ? <Text as="span" variant="meta" className={styles['project-card__index']}><span aria-hidden="true">/</span> {String(index + 1).padStart(2, '0')}</Text> : null}
                    <Text as="h3" variant="cardTitle" className={styles['project-card__name']}>{name}</Text>
                    {details ? <Text variant="meta" className={styles['project-card__details']}>{details}</Text> : null}
                </div>
            ) : null}
            <span className={styles['project-card__image-wrapper']}>
                <Image
                    className={styles['project-card__image']}
                    src={image}
                    alt={imageAlt ?? name ?? 'Project interior'}
                    fill
                    sizes="(max-width: 600px) 92vw, (max-width: 1000px) 44vw, 30vw"
                />
                <Text as="span" variant="icon" className={styles['project-card__open']} aria-hidden="true">{onClick ? '+' : '↗'}</Text>
            </span>
        </>
    );

    if (href) return <Link href={href} className={styles['project-card']}>{content}</Link>;

    if (onClick) {
        return (
            <button type="button" className={styles['project-card']} onClick={onClick} aria-label={`Open ${imageAlt ?? name ?? `project image ${index !== undefined ? index + 1 : ''}`}`}>
                {content}
            </button>
        );
    }

    return <div className={styles['project-card']}>{content}</div>;
};
