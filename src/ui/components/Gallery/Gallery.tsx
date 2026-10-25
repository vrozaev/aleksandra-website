'use client';

import React, { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "./Gallery.module.css";
import { Text } from "../Text/Text";

type GalleryProps = {
    images: string[];
    name?: string;
    startIndex?: number;
    onClose: () => void;
};

export const Gallery: React.FC<GalleryProps> = ({images, name = 'Project', startIndex = 0, onClose}) => {
    const [index, setIndex] = useState(startIndex);
    const dialogRef = useRef<HTMLDialogElement>(null);
    const closeRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        setIndex(Math.max(0, Math.min(startIndex, images.length - 1)));
    }, [startIndex, images.length]);

    const showNext = useCallback(() => {
        setIndex((current) => (current + 1) % images.length);
    }, [images.length]);

    const showPrev = useCallback(() => {
        setIndex((current) => (current - 1 + images.length) % images.length);
    }, [images.length]);

    useEffect(() => {
        const dialog = dialogRef.current;
        const previousFocus = document.activeElement as HTMLElement | null;
        const previousOverflow = document.body.style.overflow;

        dialog?.showModal();
        closeRef.current?.focus();
        document.body.style.overflow = 'hidden';

        return () => {
            dialog?.close();
            document.body.style.overflow = previousOverflow;
            previousFocus?.focus({preventScroll: true});
        };
    }, []);

    const handleKeyDown = (event: React.KeyboardEvent<HTMLDialogElement>) => {
        if (event.key === 'ArrowRight') {
            event.preventDefault();
            showNext();
        }
        if (event.key === 'ArrowLeft') {
            event.preventDefault();
            showPrev();
        }
    };

    return (
        <dialog
            ref={dialogRef}
            className={styles.gallery}
            aria-label={`${name} gallery`}
            onClick={onClose}
            onKeyDown={handleKeyDown}
            onCancel={(event) => { event.preventDefault(); onClose(); }}
        >
            <div className={styles['gallery__content']} onClick={(e) => e.stopPropagation()}>
                <div className={styles['gallery__header']}>
                    <Text variant="meta" className={styles['gallery__name']}>{name}</Text>
                    <button ref={closeRef} type="button" className={styles['gallery__close']} aria-label="Close gallery" onClick={onClose}><Text as="span" variant="iconClose" aria-hidden="true">×</Text></button>
                </div>
                <button
                    type="button"
                    className={styles['gallery__image-wrapper']}
                    onClick={showNext}
                    aria-label="Show next image"
                    disabled={images.length < 2}
                >
                    <Image src={images[index]} alt={`${name}, image ${index + 1} of ${images.length}`} fill sizes="92vw" style={{objectFit: 'contain'}} />
                </button>
                <div className={styles['gallery__controls']}>
                    <button type="button" className={styles['gallery__button']} aria-label="Previous image" onClick={showPrev} disabled={images.length < 2}><Text as="span" variant="iconLarge" aria-hidden="true">←</Text></button>
                    <Text variant="meta" className={styles['gallery__counter']} aria-live="polite" aria-atomic="true">{String(index + 1).padStart(2, '0')} <span>/</span> {String(images.length).padStart(2, '0')}</Text>
                    <button type="button" className={styles['gallery__button']} aria-label="Next image" onClick={showNext} disabled={images.length < 2}><Text as="span" variant="iconLarge" aria-hidden="true">→</Text></button>
                </div>
            </div>
        </dialog>
    );
};
