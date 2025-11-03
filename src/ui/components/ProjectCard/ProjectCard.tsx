import React from "react";
import { Text } from "../Text/Text";
import styles from './ProjectCard.module.css';
import { cc } from "../utils/cc";
import { Link } from "../Link/Link";
import Image from "next/image";
import { ProjectType } from "@/shared/projects";

type ProjectCardProps = {
    project: ProjectType;
    className?: string;
};

export const ProjectCard: React.FC<ProjectCardProps> = ({project, className}) => {
    const href = `/projects/${project.slug}`;

    return (
        <Link href={href}>
            <div className={cc(styles.projectCard, className)}>
                <div className={styles.projectCard__imageWrapper}>
                    <Image className={styles.projectCard__image} src={project.images[0]} alt='' fill objectFit='cover' />
                </div>
                <Text className={styles.projectCard__name} variant="body">{project.name}</Text>
            </div>
        </Link>
    );
};