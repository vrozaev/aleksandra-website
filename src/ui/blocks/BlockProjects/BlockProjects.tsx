import React from "react";
import styles from './BlockProjects.module.css';
import { ProjectCard } from "@/ui/components/ProjectCard/ProjectCard";
import type { StaticImageData } from "next/image";

type BlockProjectsProps = {
    projects: {name: string; image: StaticImageData; href: string;}[];
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