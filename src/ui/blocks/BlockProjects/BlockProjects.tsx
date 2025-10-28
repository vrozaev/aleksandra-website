import React from "react";
import styles from './BlockProjects.module.css';
import { ProjectCard } from "@/ui/components/ProjectCard/ProjectCard";

type BlockProjectsProps = {
    projects: {name: string; image: string; href: string;}[];
};

export const BlockProjects: React.FC<BlockProjectsProps> = ({projects}) => {
    return (
        <div className={styles.blockProjects}>
            {
                projects.map((project, index) => {
                    return (
                        <ProjectCard {...project} className={styles.blockProjects__project} key={index} />
                    );
                })
            }
        </div>
    );
}