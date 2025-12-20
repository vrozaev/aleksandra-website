'use client';

import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import styles from "./Gallery.module.css";
import { CrossIcon } from "../icons/CrossIcon";

type GalleryProps = {
    images: string[];
    startIndex?: number;
    onClose: () => void;
};

export const Gallery: React.FC<GalleryProps> = ({images, startIndex = 0, onClose}) => {
    const [index, setIndex] = useState(startIndex);

    useEffect(() => {
        setIndex(startIndex);
    }, [startIndex]);

    const showNext = useCallback(() => {
        setIndex((current) => (current + 1) % images.length);
    }, [images.length]);

    const showPrev = useCallback(() => {
        setIndex((current) => (current - 1 + images.length) % images.length);
    }, [images.length]);

    useEffect(() => {
        const handler = (event: KeyboardEvent) => {
            if (event.key === 'Escape') onClose();
            if (event.key === 'ArrowRight') showNext();
            if (event.key === 'ArrowLeft') showPrev();
        };
        window.addEventListener('keydown', handler);
        return () => window.removeEventListener('keydown', handler);
    }, [onClose, showNext, showPrev]);

    return (
        <div className={styles.gallery} onClick={onClose}>
            <div className={styles['gallery__content']} onClick={(e) => e.stopPropagation()}>
                <div className={styles['gallery__image-wrapper']} onClick={showNext}>
                    <Image src={images[index]} alt="Project image" fill style={{objectFit: 'contain'}} />
                </div>
                <CrossIcon className={styles['gallery__close']} fill="white" onClick={onClose} /> 
            </div>
        </div>
    );
};
