'use client';
import React, { useCallback, useState } from "react";
import styles from './BlockProject.module.css';
import { Text } from "@/ui/components/Text/Text";
import { ProjectType } from "@/shared/projects";
import { ProjectCard } from "@/ui/components/ProjectCard/ProjectCard";
import { ProjectCardWrapper } from "@/ui/components/ProjectCardWrapper/ProjectCardWrapper";
import { Gallery } from "@/ui/components/Gallery/Gallery";
import Link from 'next/link';

type BlockProjectProps = {
    project: ProjectType;
};

export const BlockProject: React.FC<BlockProjectProps> = ({project}) => {
    const {images, name, details, description, slug} = project;
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const openGallery = useCallback((index: number) => () => setActiveIndex(index), []);
    const closeGallery = useCallback(() => setActiveIndex(null), []);

    return (
        <div className={styles['block-project']}>
            <div className={styles['block-project__eyebrow']}>
                <Link href="/projects"><Text as="span" variant="meta">All projects</Text> <Text as="span" variant="icon" aria-hidden="true">↗</Text></Link>
                <Text as="span" variant="meta"><span className={styles['block-project__slash']} aria-hidden="true">/</span> {String(Number(slug.split('-')[0])).padStart(2, '0')}</Text>
            </div>
            <header className={styles['block-project__info-wrapper']}>
                <Text variant="pageTitle" as="h1" className={styles['block-project__name']}>{name}</Text>
                <div className={styles['block-project__story']}>
                    <Text variant="meta" className={styles['block-project__details']}>{details}</Text>
                    {description.map((item, index) => (
                        <Text variant="body" key={index} className={styles['block-project__description']}>{item}</Text>
                    ))}
                </div>
            </header>

            <div className={styles['block-project__gallery-label']}>
                <Text as="span" variant="label">Project gallery</Text>
                <Text as="span" variant="label">({String(images.length).padStart(2, '0')})</Text>
            </div>
            <ProjectCardWrapper>
                {
                    images.map((image, index) => (
                        <ProjectCard image={image} imageAlt={`${name}, image ${index + 1}`} index={index} key={image} onClick={openGallery(index)} />
                    ))
                }
            </ProjectCardWrapper>

            {activeIndex !== null ? (
                <Gallery images={images} name={name} startIndex={activeIndex} onClose={closeGallery} />
            ) : null}
        </div>
    )
};
