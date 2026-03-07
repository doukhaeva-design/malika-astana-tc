/* 
  Подвал сайта (FooterComponent)
  Показывает краткую информацию о центре и основные ссылки.
  Пользователь может найти контактные данные или перейти в нужный раздел.
*/

"use client";

import React from 'react';
import Link from 'next/link';
import styles from './FooterComponent.module.css';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function FooterComponent() {
    const { t } = useLanguage();

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.info}>
                    <p className={styles.logo}>Malika</p>
                    <p className={styles.tagline}>{t.footer.tagline}</p>
                    <div className={styles.socials}>
                        <a href={t.common.instagram} target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Instagram">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                        </a>
                        <a href={t.common.whatsapp} target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="WhatsApp">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-11.23 8.38 8.38 0 0 1 3.5.7l5 1.5-1.5 5.2z"></path></svg>
                        </a>
                        <a href="http://www.aka-salym.kz" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Website">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10z"></path></svg>
                        </a>
                    </div>
                </div>

                <div className={styles.contacts}>
                    <p className={styles.footerLabel}>{t.common.contacts}</p>
                    <div className={styles.contactItem}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={styles.icon}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                        <span>{t.visit.addressVal}</span>
                    </div>
                    <div className={styles.contactItem}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={styles.icon}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                        <span>{t.visit.phoneVal}</span>
                    </div>
                    <div className={styles.contactItem}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={styles.icon}><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                        <span>{t.visit.hoursVal}</span>
                    </div>
                </div>

                <div className={styles.links}>
                    <p className={styles.footerLabel}>{t.common.nav}</p>
                    <Link href="/directions" className={styles.footerLink}>{t.common.directions}</Link>
                    <Link href="/rehab" className={styles.footerLink}>{t.common.rehab}</Link>
                    <Link href="/rent" className={styles.footerLink}>{t.common.rent}</Link>
                    <Link href="/contacts" className={styles.footerLink}>{t.common.contacts}</Link>
                </div>

                <div className={styles.copyright}>
                    <p>&copy; {new Date().getFullYear()} {t.common.company}. {t.footer.rights}</p>
                    <div className={styles.legal}>
                        <span>{t.footer.privacy}</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
