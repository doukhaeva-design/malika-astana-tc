/* 
  Секция контактной информации (ContactInfoSectionComponent)
  Показывает детальные способы связи с торговым центром.
  Пользователь может найти телефон, почту и точный адрес для связи.
*/

"use client";

import React from 'react';
import styles from './ContactInfoSectionComponent.module.css';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function ContactInfoSectionComponent() {
    const { language, t } = useLanguage();

    return (
        <section className={styles.section} id="contact-info">
            <div className={styles.container}>
                <div className={styles.infoGrid}>
                    {/* Адрес */}
                    <div className={`${styles.infoCard} animate-fade stagger-1`}>
                        <div className={styles.iconBox}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                        </div>
                        <span className={styles.cardLabel}>{t.contactInfo.addressTitle}</span>
                        <p className={styles.cardValue}>{t.common.footerAddress}</p>
                    </div>

                    {/* Телефон */}
                    <div className={`${styles.infoCard} animate-fade stagger-2`}>
                        <div className={styles.iconBox}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                        </div>
                        <span className={styles.cardLabel}>{t.contactInfo.phoneTitle}</span>
                        <p className={styles.cardValue}>+7 (705) 555-76-09</p>
                    </div>

                    {/* Email */}
                    <div className={`${styles.infoCard} animate-fade stagger-3`}>
                        <div className={styles.iconBox}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                        </div>
                        <span className={styles.cardLabel}>Email</span>
                        <p className={styles.cardValue}>akasalym.renta@gmail.com</p>
                    </div>

                    {/* График */}
                    <div className={`${styles.infoCard} animate-fade stagger-4`}>
                        <div className={styles.iconBox}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                        </div>
                        <span className={styles.cardLabel}>{t.contactInfo.hoursTitle}</span>
                        <p className={styles.cardValue}>
                            {t.contactInfo.hoursDaily}<br />
                            09:00 — 18:00
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
