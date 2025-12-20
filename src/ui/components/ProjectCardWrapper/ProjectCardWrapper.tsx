import React from "react";
import styles from './ProjectCardWrapper.module.css';

type Props = {
  children?: React.ReactNode
};

export const ProjectCardWrapper: React.FC<Props> = ({children}) => {
    return (
        <div className={styles['project-card-wrapper']}>
            {children}
        </div>
    );
};
