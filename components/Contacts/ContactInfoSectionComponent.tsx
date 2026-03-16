/*
  Контактная информация (ContactInfoSectionComponent)
  Заголовок + карточки: адрес, телефон, WhatsApp, часы работы.
*/

"use client";

import styles from './ContactInfoSectionComponent.module.css';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function ContactInfoSectionComponent() {
    const { language, t } = useLanguage();

    return (
        <section className={styles.section} id="contacts-header">
            <div className={styles.container}>
                <div className={`${styles.header} animate-fade`}>
                    <span className={styles.subtitle}>
                        {language === 'ru' ? 'Контакты' : 'Contacts'}
                    </span>
                    <h1 className={styles.title}>
                        {language === 'ru' ? 'Свяжитесь с нами' : 'Get in touch'}
                    </h1>
                </div>

                <div className={styles.infoGrid}>
                    {/* Адрес */}
                    <div className={`${styles.infoCard} animate-fade stagger-1`}>
                        <div className={styles.iconBox} style={{ background: 'rgba(230, 126, 34, 0.08)', color: '#e67e22' }}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                        </div>
                        <span className={styles.cardLabel}>
                            {language === 'ru' ? 'Адрес' : 'Address'}
                        </span>
                        <p className={styles.cardValue}>
                            {t.contactPage.address1}
                            <br />
                            <span className={styles.hint}>
                                {language === 'ru' ? 'Ориентир — трасса Алаш' : 'Landmark — Alash Highway'}
                            </span>
                        </p>
                    </div>

                    {/* Телефон */}
                    <div className={`${styles.infoCard} animate-fade stagger-2`}>
                        <div className={styles.iconBox} style={{ background: 'rgba(52, 152, 219, 0.08)', color: '#3498db' }}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                        </div>
                        <span className={styles.cardLabel}>
                            {language === 'ru' ? 'Телефон' : 'Phone'}
                        </span>
                        <a href="tel:+77003053536" className={styles.cardLink}>
                            +7 (700) 305-35-36
                        </a>
                    </div>

                    {/* WhatsApp */}
                    <div className={`${styles.infoCard} animate-fade stagger-3`}>
                        <div className={styles.iconBox} style={{ background: 'rgba(39, 174, 96, 0.08)', color: '#27ae60' }}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-11.23 8.38 8.38 0 0 1 3.5.7l5 1.5-1.5 5.2z" /></svg>
                        </div>
                        <span className={styles.cardLabel}>WhatsApp</span>
                        <a href={t.common.whatsapp} target="_blank" rel="noopener noreferrer" className={styles.cardLink}>
                            {language === 'ru' ? 'Написать' : 'Send message'}
                        </a>
                    </div>

                    {/* Часы работы */}
                    <div className={`${styles.infoCard} animate-fade stagger-4`}>
                        <div className={styles.iconBox} style={{ background: 'rgba(155, 89, 182, 0.08)', color: '#9b59b6' }}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                        </div>
                        <span className={styles.cardLabel}>
                            {language === 'ru' ? 'Время работы' : 'Working hours'}
                        </span>
                        <p className={styles.cardValue}>
                            {t.contactInfo.hoursDaily}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
