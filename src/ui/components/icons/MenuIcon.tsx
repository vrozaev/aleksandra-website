import React from "react";
import styles from './Icon.module.css';
import { cc } from "../utils/cc";


type MenuIconProps = {
    onClick?: () => void;
    className?: string;
};

export const MenuIcon: React.FC<MenuIconProps> = ({onClick, className}) => {
    return (
        <svg 
            className={cc(styles['icon'], className)}
            onClick={onClick}
            fill="#000000" 
            width="30px" 
            height="30px" 
            viewBox="0 0 20 20" 
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
        </svg>
    );
}
