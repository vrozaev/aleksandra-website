import React from "react";
import styles from './BlockProjects.module.css';
import { ProjectCard } from "@/ui/components/ProjectCard/ProjectCard";
import { ProjectType } from "@/shared/projects";

type BlockProjectsProps = {
    projects: ProjectType[];
};

export const BlockProjects: React.FC<BlockProjectsProps> = ({projects}) => {
    return (
        <div className={styles.blockProjects}>
            {
                projects.map((project, index) => {
                    return (
                        <ProjectCard project={project} className={styles.blockProjects__project} key={index} />
                    );
                })
            }
        </div>
    );
}