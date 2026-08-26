import React from "react";
import styles from './Icon.module.css';
import { cc } from "../utils/cc";

type CrossIconProps = {
    onClick?: () => void;
    className?: string;
    fill?: string;
};

export const CrossIcon: React.FC<CrossIconProps> = ({onClick, className, fill='currentColor'}) => {
    return (
        <svg 
            fill={fill}
            width="30px" 
            height="30px" 
            viewBox="0 0 16 16" 
            xmlns="http://www.w3.org/2000/svg"
            onClick={onClick}
            className={cc(styles['icon'], className)}
        >
            <path d="M0 14.545L1.455 16 8 9.455 14.545 16 16 14.545 9.455 8 16 1.455 14.545 0 8 6.545 1.455 0 0 1.455 6.545 8z" fillRule="evenodd"/>
        </svg>
    );
}
