import React from "react";
import styles from './ProjectBlock.module.css';
import { Text } from "@/ui/components/Text/Text";
import Image, { StaticImageData } from "next/image";
import { ProjectType } from "@/shared/projects";

type ProjectBlockProps = {
    project: ProjectType;
};

export const ProjectBlock: React.FC<ProjectBlockProps> = ({project}) => {
    const {images, name, details, description} = project;

    return (
        <div className={styles.projectBlock}>
            <div>
                    {
                        images.map((item, index) => (
                            <Image src={item} key={index} alt='' />
                        ))
                    }
            </div>
            <div>
                <Text variant="body" className={styles.projectBlock__name}>{name}</Text>
                <Text variant="body" className={styles.projectBlock__details}>{details}</Text>
                {
                    description.map((item, index) => (
                        <Text variant="body" key={index} className={styles.projectBlock__description}>{item}</Text>
                    ))
                }
            </div>
        </div>
    )
};