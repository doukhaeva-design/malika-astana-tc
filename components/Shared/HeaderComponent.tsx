"use client";

/* 
  Шапка сайта (HeaderComponent)
  Desktop: Logo + Links + Route Btn + Lang.
  Mobile: Logo top, Bottom Navigation (App-like).
*/

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './HeaderComponent.module.css';

export default function HeaderComponent() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        // Initial check
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Prevent scrolling when mobile menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isMenuOpen]);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    const isHomePage = pathname === '/';

    return (
        <>
            <header className={`${styles.header} ${(!isHomePage || isScrolled) ? styles.scrolled : ''} ${isMenuOpen ? styles.menuOpenHeader : ''}`}>
                <div className={styles.topBar}>
                    <div className={styles.topContainer}>
                        <div className={styles.topItem}>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={styles.topIcon}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                            <span>Астана, Шоссе Алаш</span>
                        </div>
                        <div className={styles.topItem}>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={styles.topIcon}><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                            <span>Ежедневно 09:00 — 18:00</span>
                        </div>
                    </div>
                </div>
                <div className={styles.container}>
                    <Link href="/" className={styles.logo} onClick={closeMenu}>
                        MALIKA
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className={styles.nav}>
                        <Link href="/" className={styles.link}>О центре</Link>
                        <Link href="/directions" className={styles.link}>Магазины и сервисы</Link>
                        <Link href="/rehab" className={styles.link}>Реабилитационный центр</Link>
                        <Link href="/rent" className={styles.link}>Арендаторам</Link>
                        <Link href="/contacts" className={styles.link}>Контакты</Link>
                    </nav>

                    <div className={styles.actions}>
                        <Link href="/contacts" className={styles.btnRoute}>
                            Проложить маршрут
                        </Link>
                        <div className={styles.langSwitch}>
                            <span className={styles.activeLang}>RU</span> | <span>EN</span>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu Overlay */}
                <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.mobileMenuOpen : ''}`}>
                    <nav className={styles.mobileNav}>
                        <Link href="/" className={`${styles.mobileLink} ${pathname === '/' ? styles.mobileLinkActive : ''}`} onClick={closeMenu}>О центре</Link>
                        <Link href="/directions" className={`${styles.mobileLink} ${pathname === '/directions' ? styles.mobileLinkActive : ''}`} onClick={closeMenu}>Магазины и сервисы</Link>
                        <Link href="/rehab" className={`${styles.mobileLink} ${pathname === '/rehab' ? styles.mobileLinkActive : ''}`} onClick={closeMenu}>Реабилитационный центр</Link>
                        <Link href="/rent" className={`${styles.mobileLink} ${pathname === '/rent' ? styles.mobileLinkActive : ''}`} onClick={closeMenu}>Арендаторам</Link>
                        <Link href="/contacts" className={`${styles.mobileLink} ${pathname === '/contacts' ? styles.mobileLinkActive : ''}`} onClick={closeMenu}>Контакты</Link>
                    </nav>
                    <div className={styles.mobileActions}>
                        <Link href="/contacts" className={styles.btnRouteMobile} onClick={closeMenu}>
                            Проложить маршрут
                        </Link>
                        <div className={styles.langSwitchMobile}>
                            <span className={styles.activeLangMobile}>RU</span> | <span>EN</span>
                        </div>
                    </div>
                </div>
            </header>

            {/* Premium App-like Bottom Navigation (Mobile Only) */}
            <nav className={styles.bottomNav}>
                <Link href="/" className={`${styles.bottomNavItem} ${pathname === '/' ? styles.bottomNavActive : ''}`} onClick={closeMenu}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                    <span>Главная</span>
                </Link>
                <Link href="/directions" className={`${styles.bottomNavItem} ${pathname === '/directions' ? styles.bottomNavActive : ''}`} onClick={closeMenu}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
                    <span>Магазины</span>
                </Link>
                <Link href="/rent" className={`${styles.bottomNavItem} ${pathname === '/rent' ? styles.bottomNavActive : ''}`} onClick={closeMenu}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18"></path><path d="M9 8h1"></path><path d="M9 12h1"></path><path d="M9 16h1"></path><path d="M14 8h1"></path><path d="M14 12h1"></path><path d="M14 16h1"></path><path d="M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16"></path></svg>
                    <span>Аренда</span>
                </Link>
                <button className={`${styles.bottomNavItem} ${isMenuOpen ? styles.bottomNavActive : ''}`} onClick={toggleMenu} aria-label="Toggle menu">
                    {isMenuOpen ? (
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                    ) : (
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="1.5"></circle><circle cx="12" cy="5" r="1.5"></circle><circle cx="12" cy="19" r="1.5"></circle></svg>
                    )}
                    <span>Ещё</span>
                </button>
            </nav>
        </>
    );
}
