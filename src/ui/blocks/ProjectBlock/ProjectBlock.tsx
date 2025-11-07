import React from "react";
import styles from './ProjectBlock.module.css';
import { Text } from "@/ui/components/Text/Text";
import { ProjectType } from "@/shared/projects";
import { ProjectCard } from "@/ui/components/ProjectCard/ProjectCard";
import { ProjectCardWrapper } from "@/ui/components/ProjectCardWrapper/ProjectCardWrapper";

type ProjectBlockProps = {
    project: ProjectType;
};

export const ProjectBlock: React.FC<ProjectBlockProps> = ({project}) => {
    const {images, name, details, description} = project;

    return (
        <div className={styles.projectBlock}>
            <div className={styles.projectBlock__infoWrapper}>
                <Text variant="h1" className={styles.projectBlock__name}>{name}</Text>
                <Text variant="h2" className={styles.projectBlock__details}>{details}</Text>
                {
                    description.map((item, index) => (
                        <Text variant="body" key={index} className={styles.projectBlock__description}>{item}</Text>
                    ))
                }
            </div>
            
            <ProjectCardWrapper>
                {
                    images.map((image, index) => (
                        <ProjectCard image={image} key={index} />
                    ))
                }
            </ProjectCardWrapper>
        </div>
    )
};