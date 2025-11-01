import React from "react";
import styles from './ProjectBlock.module.css';
import { Text } from "@/ui/components/Text/Text";
import Image, { StaticImageData } from "next/image";

type ProjectBlockProps = {
    images: StaticImageData[];
    name: string;
    details: string;
    description: string[];
};

export const ProjectBlock: React.FC<ProjectBlockProps> = ({images, name, details, description}) => {
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