'use client';
import React from "react";
import styles from './BlockProject.module.css';
import { Text } from "@/ui/components/Text/Text";
import { ProjectType } from "@/shared/projects";
import { ProjectCard } from "@/ui/components/ProjectCard/ProjectCard";
import { ProjectCardWrapper } from "@/ui/components/ProjectCardWrapper/ProjectCardWrapper";

type BlockProjectProps = {
    project: ProjectType;
};

export const BlockProject: React.FC<BlockProjectProps> = ({project}) => {
    const {images, name, details, description} = project;

    const handleOpen = (imageUrl: string) => () => {
        window.open(imageUrl, '_blank', 'noopener,noreferrer');
    };

    return (
        <div className={styles['block-project']}>
            <div className={styles['block-project__info-wrapper']}>
                <Text variant="h1" className={styles['block-project__name']}>{name}</Text>
                <Text variant="h2" className={styles['block-project__details']}>{details}</Text>
                {
                    description.map((item, index) => (
                        <Text variant="body" key={index} className={styles['block-project__description']}>{item}</Text>
                    ))
                }
            </div>
            
            <ProjectCardWrapper>
                {
                    images.map((image, index) => (
                        <ProjectCard image={image} key={index} onClick={handleOpen(image)} />
                    ))
                }
            </ProjectCardWrapper>
        </div>
    )
};
