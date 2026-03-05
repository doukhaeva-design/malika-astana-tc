/* 
  Информационная секция (ContentSectionComponent)
  Детализирует направления работы реабилитационного центра.
  Пользователь может узнать о конкретных услугах, графике приема и контактах.
  Три блока: направления (иконки-карточки), контакты, расписание.
*/

"use client";

import React from 'react';
import styles from './ContentSectionComponent.module.css';
import { useLanguage } from '@/lib/i18n/LanguageContext';

// Иконки для каждого направления реабилитации
const directionIcons = [
    // Физическая реабилитация — человек в движении
    <svg key="phys" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="5" r="2" />
        <path d="M10 9l-2 6h8l-2-6" />
        <path d="M9 15l-1 4M15 15l1 4" />
        <path d="M7 12l-2 2M17 12l2 2" />
    </svg>,
    // Восстановление после травм — сердце + плюс
    <svg key="trauma" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 21C12 21 4 14 4 8.5a4.5 4.5 0 0 1 8-2.8A4.5 4.5 0 0 1 20 8.5C20 14 12 21 12 21z" />
        <line x1="12" y1="10" x2="12" y2="14" />
        <line x1="10" y1="12" x2="14" y2="12" />
    </svg>,
    // Консультации — чат/диалог
    <svg key="consult" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        <line x1="9" y1="9" x2="15" y2="9" />
        <line x1="9" y1="13" x2="12" y2="13" />
    </svg>,
];

export default function ContentSectionComponent() {
    const { t } = useLanguage();

    return (
        <section className={styles.section}>
            <div className={styles.container}>

                {/* Направления работы — карточки с иконками */}
                <div className={styles.infoBlock}>
                    <h2 className={styles.blockTitle}>{t.rehabPage.directionsTitle}</h2>
                    <div className={styles.directionCards}>
                        {t.rehabPage.directionsDocs.map((item, i) => (
                            <div key={i} className={styles.directionCard}>
                                <div className={styles.iconBox}>
                                    {directionIcons[i] ?? directionIcons[0]}
                                </div>
                                <span className={styles.directionLabel}>{item}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Контактная информация */}
                <div className={styles.infoBlock}>
                    <h2 className={styles.blockTitle}>{t.rehabPage.contactsTitle}</h2>
                    <div className={styles.contactRow}>
                        <svg className={styles.contactIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                        </svg>
                        <span>{t.common.footerPhone}</span>
                    </div>
                    <div className={styles.contactRow}>
                        <svg className={styles.contactIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" />
                            <circle cx="12" cy="10" r="3" />
                        </svg>
                        <span>{t.rehabPage.address}</span>
                    </div>
                </div>

                {/* Расписание приёма */}
                <div className={styles.infoBlock}>
                    <h2 className={styles.blockTitle}>{t.rehabPage.scheduleTitle}</h2>
                    <div className={styles.scheduleList}>
                        {t.rehabPage.scheduleDocs.map((line, i) => (
                            <div key={i} className={styles.scheduleRow}>
                                <svg className={styles.contactIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="12" cy="12" r="10" />
                                    <polyline points="12 6 12 12 16 14" />
                                </svg>
                                <span>{line}</span>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
