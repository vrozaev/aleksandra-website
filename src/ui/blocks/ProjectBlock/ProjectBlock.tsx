import React from "react";
import styles from './ProjectBlock.module.css';

type ProjectBlockProps = {
    images: string[];
    name: string;
    details: string;
    description: string[];
}

export const ProjectBlock: React.FC<ProjectBlockProps> = () => {
    return (
        <div className={styles.projectBlock}>
            
        </div>
    )
};