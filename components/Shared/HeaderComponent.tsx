"use client";

/*
  Шапка сайта (HeaderComponent)
  Desktop: Верхняя инфо-панель (адрес, часы, телефон, язык) + Навигация (лого, ссылки, CTA).
  Mobile: Компактная инфо-панель + Нижняя навигация (App-like) + Полноэкранное меню.
*/

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './HeaderComponent.module.css';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function HeaderComponent() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLangOpen, setIsLangOpen] = useState(false);
    const pathname = usePathname();
    const { language, setLanguage, t } = useLanguage();

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [isMenuOpen]);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => { setIsMenuOpen(false); setIsLangOpen(false); };
    const toggleLang = () => setIsLangOpen(!isLangOpen);

    const handleHomeClick = () => {
        closeMenu();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const isHomePage = pathname === '/';

    return (
        <>
            <header className={`${styles.header} ${(!isHomePage || isScrolled) ? styles.scrolled : ''} ${isMenuOpen ? styles.menuOpenHeader : ''}`}>
                {/* Line 1: Info bar */}
                <div className={styles.topBar}>
                    <div className={styles.topContainer}>
                        <div className={styles.topLeft}>
                            <div className={styles.topItem}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={styles.topIcon}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                                <span>{t.common.address}</span>
                            </div>
                            <div className={styles.topDivider} />
                            <div className={styles.topItem}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={styles.topIcon}><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                                <span>{t.common.hours}</span>
                            </div>
                        </div>
                        <div className={styles.topRight}>
                            <a href={`tel:${t.visit.phoneVal}`} className={styles.topItem}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={styles.topIcon}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                                <span>{t.visit.phoneVal}</span>
                            </a>
                            <div className={styles.topDivider} />
                            <div className={styles.langSwitchPill}>
                                <button
                                    className={`${styles.langBtn} ${language === 'ru' ? styles.activeLang : ''}`}
                                    onClick={() => setLanguage('ru')}
                                >
                                    RU
                                </button>
                                <button
                                    className={`${styles.langBtn} ${language === 'en' ? styles.activeLang : ''}`}
                                    onClick={() => setLanguage('en')}
                                >
                                    EN
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Line 2: Main navigation */}
                <div className={styles.container}>
                    <div className={styles.mainRow}>
                        <Link href="/" className={styles.logo} onClick={handleHomeClick}>
                            Malika
                        </Link>

                        <nav className={styles.nav}>
                            <Link href="/" className={`${styles.link} ${pathname === '/' ? styles.activeLink : ''}`}>{t.common.home}</Link>
                            <Link href="/shops" className={`${styles.link} ${pathname === '/shops' ? styles.activeLink : ''}`}>{t.common.directionsShort}</Link>
                            <Link href="/rehab" className={`${styles.link} ${pathname === '/rehab' ? styles.activeLink : ''}`}>{t.common.rehab}</Link>
                            <Link href="/tenants" className={`${styles.link} ${pathname === '/tenants' ? styles.activeLink : ''}`}>{t.common.rent}</Link>
                            <Link href="/about" className={`${styles.link} ${pathname === '/about' ? styles.activeLink : ''}`}>{t.common.aboutCenter}</Link>
                            <Link href="/contacts#contacts-header" className={`${styles.link} ${pathname === '/contacts' ? styles.activeLink : ''}`}>{t.common.contacts}</Link>
                        </nav>

                        <div className={styles.actions}>
                            <Link href="/tenants" className={styles.becomeTenantBtn}>
                                {t.common.becomeTenant}
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu Overlay */}
                <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.mobileMenuOpen : ''}`}>
                    <div className={styles.mobileMenuHeader}>
                        <Link href="/" className={styles.mobileLogo} onClick={handleHomeClick}>
                            Malika
                        </Link>
                        <div className={styles.headerActionsMobile}>
                            <div className={styles.langWrapperMobile}>
                                <button className={styles.langToggleBtn} onClick={toggleLang} aria-label="Switch language">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.planetIcon}><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                                    <span className={styles.activeLangText}>{language.toUpperCase()}</span>
                                </button>
                                <div className={`${styles.langDropdownMobile} ${isLangOpen ? styles.langDropdownOpen : ''}`}>
                                    <span className={styles.langOption} onClick={() => { setLanguage('ru'); setIsLangOpen(false); }}>RU</span>
                                    <span className={styles.langOption} onClick={() => { setLanguage('en'); setIsLangOpen(false); }}>EN</span>
                                </div>
                            </div>
                            <button className={styles.closeBtn} onClick={closeMenu} aria-label="Close menu">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
                            </button>
                        </div>
                    </div>

                    <div className={styles.mobileMenuContent}>
                        <nav className={styles.mobileNav}>
                            <Link href="/" className={`${styles.mobileLink} ${pathname === '/' ? styles.mobileLinkActive : ''}`} onClick={closeMenu}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.linkIcon}><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>
                                <span className={styles.linkText}>{t.common.home}</span>
                            </Link>
                            <Link href="/shops" className={`${styles.mobileLink} ${pathname === '/shops' ? styles.mobileLinkActive : ''}`} onClick={closeMenu}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.linkIcon}><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" /><line x1="3" y1="6" x2="21" y2="6" /><path d="M16 10a4 4 0 0 1-8 0" /></svg>
                                <span className={styles.linkText}>{t.common.directionsShort}</span>
                            </Link>
                            <Link href="/rehab" className={`${styles.mobileLink} ${pathname === '/rehab' ? styles.mobileLinkActive : ''}`} onClick={closeMenu}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.linkIcon}><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>
                                <span className={styles.linkText}>{t.common.rehab}</span>
                            </Link>
                            <Link href="/tenants" className={`${styles.mobileLink} ${pathname === '/tenants' ? styles.mobileLinkActive : ''}`} onClick={closeMenu}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.linkIcon}><path d="M3 21h18" /><path d="M9 8h1" /><path d="M9 12h1" /><path d="M9 16h1" /><path d="M14 8h1" /><path d="M14 12h1" /><path d="M14 16h1" /><path d="M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16" /></svg>
                                <span className={styles.linkText}>{t.common.rent}</span>
                            </Link>
                            <Link href="/about" className={`${styles.mobileLink} ${pathname === '/about' ? styles.mobileLinkActive : ''}`} onClick={closeMenu}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.linkIcon}><circle cx="12" cy="12" r="10" /><line x1="12" y1="16" x2="12" y2="12" /><line x1="12" y1="8" x2="12.01" y2="8" /></svg>
                                <span className={styles.linkText}>{t.common.aboutCenter}</span>
                            </Link>
                            <Link href="/contacts#contacts-header" className={`${styles.mobileLink} ${pathname === '/contacts' ? styles.mobileLinkActive : ''}`} onClick={closeMenu}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.linkIcon}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                                <span className={styles.linkText}>{t.common.contacts}</span>
                            </Link>
                        </nav>
                    </div>

                    <div className={styles.mobileMenuFooter} />
                </div>
            </header>

            {/* Bottom Nav (Mobile Only) */}
            <nav className={styles.bottomNav}>
                <Link href="/" className={`${styles.bottomNavItem} ${pathname === '/' ? styles.bottomNavActive : ''}`} onClick={handleHomeClick}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>
                    <span>{t.common.home}</span>
                </Link>
                <Link href="/shops" className={`${styles.bottomNavItem} ${pathname === '/shops' ? styles.bottomNavActive : ''}`} onClick={closeMenu}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /></svg>
                    <span>{t.common.directionsShort}</span>
                </Link>
                <Link href="/tenants" className={`${styles.bottomNavItem} ${pathname === '/tenants' ? styles.bottomNavActive : ''}`} onClick={closeMenu}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18" /><path d="M9 8h1" /><path d="M9 12h1" /><path d="M9 16h1" /><path d="M14 8h1" /><path d="M14 12h1" /><path d="M14 16h1" /><path d="M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16" /></svg>
                    <span>{t.common.rent}</span>
                </Link>
                <button className={`${styles.bottomNavItem} ${isMenuOpen ? styles.bottomNavActive : ''}`} onClick={toggleMenu} aria-label="Toggle menu">
                    {isMenuOpen ? (
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
                    ) : (
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="1.5" /><circle cx="12" cy="5" r="1.5" /><circle cx="12" cy="19" r="1.5" /></svg>
                    )}
                    <span>{t.common.more}</span>
                </button>
            </nav>
        </>
    );
}
