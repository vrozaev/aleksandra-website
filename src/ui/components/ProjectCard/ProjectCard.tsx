import React from "react";
import { Text } from "../Text/Text";
import styles from './ProjectCard.module.css';
import { cc } from "../utils/cc";
import { Link } from "../Link/Link";
import Image, {StaticImageData} from "next/image";

type ProjectCardProps = {
    name: string;
    image: StaticImageData;
    href: string;
    className?: string;
};

export const ProjectCard: React.FC<ProjectCardProps> = ({name, image, className, href}) => {
    return (
        <Link href={href}>
            <div className={cc(styles.projectCard, className)}>
                <div className={styles.projectCard__imageWrapper}>
                    <Image className={styles.projectCard__image} src={image} fill objectFit='fit' alt="" />
                </div>
                <Text className={styles.projectCard__name} variant="body">{name}</Text>
            </div>
        </Link>
    );
};