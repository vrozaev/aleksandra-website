"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Link } from "../Link/Link";
import { cc } from "../utils/cc";
import styles from "./Navigation.module.css";
import { Text } from "../Text/Text";

const links = [
    { href: '/', label: 'Home' },
    { href: '/projects', label: 'Projects' },
    { href: '/services', label: 'Services' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
];

const Logo = () => (
    <Image
        className={styles.logoImage}
        src='/aleksandra-website/images/formae-bureau-logo-transparent.webp'
        alt='Formae Bureau'
        width={1375}
        height={507}
        priority
    />
);

export const Navigation: React.FC = () => {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const dialogRef = useRef<HTMLDialogElement>(null);
    const triggerRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    useEffect(() => {
        const dialog = dialogRef.current;
        if (!dialog || !isOpen) return;

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        dialog.showModal();
        dialog.querySelector<HTMLAnchorElement>('nav a')?.focus();

        const breakpoint = window.matchMedia('(min-width: 900px)');
        const closeOnDesktop = () => {
            if (breakpoint.matches) setIsOpen(false);
        };
        breakpoint.addEventListener('change', closeOnDesktop);

        return () => {
            breakpoint.removeEventListener('change', closeOnDesktop);
            document.body.style.overflow = previousOverflow;
            dialog.close();
            triggerRef.current?.focus();
        };
    }, [isOpen]);

    const isActive = (href: string) => href === '/'
        ? pathname === '/'
        : pathname === href || pathname.startsWith(`${href}/`);

    return (
        <header className={styles.navigation}>
            <div className={styles.inner}>
                <Link className={styles.logo} href='/' aria-label='Formae Bureau home'>
                    <Logo />
                </Link>
                <nav className={styles.desktopLinks} aria-label='Main navigation'>
                    {links.map(({ href, label }) => (
                        <Link
                            key={href}
                            className={cc(styles.link, href === '/contact' && styles.contactLink)}
                            href={href}
                            aria-current={isActive(href) ? 'page' : undefined}
                        >
                            <Text as="span" variant="label">{label}</Text>
                        </Link>
                    ))}
                </nav>
                <button
                    ref={triggerRef}
                    className={styles.menuButton}
                    type='button'
                    aria-expanded={isOpen}
                    aria-controls='mobile-navigation'
                    aria-label='Open navigation menu'
                    onClick={() => setIsOpen(true)}
                >
                    <Text as="span" variant="label">Menu</Text>
                    <svg width='22' height='16' viewBox='0 0 22 16' fill='none' aria-hidden='true'>
                        <path d='M1 4H21M1 12H21' stroke='currentColor' />
                    </svg>
                </button>
            </div>
            <dialog
                id='mobile-navigation'
                ref={dialogRef}
                className={styles.mobileDialog}
                aria-label='Navigation menu'
                onCancel={(event) => {
                    event.preventDefault();
                    setIsOpen(false);
                }}
            >
                <div className={styles.dialogHeader}>
                    <Link href='/' className={styles.logo} aria-label='Formae Bureau home' onClick={() => setIsOpen(false)}>
                        <Logo />
                    </Link>
                    <button
                        className={styles.closeButton}
                        type='button'
                        aria-label='Close navigation menu'
                        onClick={() => setIsOpen(false)}
                    >
                        <Text as="span" variant="label">Close</Text>
                        <svg width='22' height='22' viewBox='0 0 22 22' fill='none' aria-hidden='true'>
                            <path d='M4 4L18 18M18 4L4 18' stroke='currentColor' />
                        </svg>
                    </button>
                </div>
                <nav className={styles.mobileLinks} aria-label='Mobile navigation'>
                    {links.map(({ href, label }, index) => (
                        <Link
                            key={href}
                            className={styles.mobileLink}
                            href={href}
                            aria-current={isActive(href) ? 'page' : undefined}
                            onClick={() => setIsOpen(false)}
                        >
                            <Text as="span" variant="label" className={styles.linkIndex} aria-hidden='true'>0{index + 1}</Text>
                            <Text as="span" variant="sectionTitle">{label}</Text>
                            <Text as="span" variant="iconLarge" className={styles.mobileArrow} aria-hidden='true'>↗</Text>
                        </Link>
                    ))}
                </nav>
                <div className={styles.dialogFooter}>
                    <Text as="span" variant="caption">Interior design / The Netherlands</Text>
                    <a href='mailto:contact@formaebureau.nl'><Text as="span" variant="body">contact@formaebureau.nl</Text></a>
                </div>
            </dialog>
        </header>
    );
};
