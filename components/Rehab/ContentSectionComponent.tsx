/* 
  Информационная секция (ContentSectionComponent)
  Детализирует направления работы реабилитационного центра.
  Пользователь может узнать о конкретных услугах, графике приема и контактах.
*/

"use client";

import React from 'react';
import styles from './ContentSectionComponent.module.css';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function ContentSectionComponent() {
    const { t } = useLanguage();

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.infoBlock}>
                    <h2>{t.rehabPage.directionsTitle}</h2>
                    <ul>
                        {t.rehabPage.directionsDocs.map((item, i) => (
                            <li key={i}>{item}</li>
                        ))}
                    </ul>
                </div>
                <div className={styles.infoBlock}>
                    <h2>{t.rehabPage.contactsTitle}</h2>
                    <p>{t.common.footerPhone}</p>
                    <p>{t.rehabPage.address}</p>
                </div>
                <div className={styles.infoBlock}>
                    <h2>{t.rehabPage.scheduleTitle}</h2>
                    {t.rehabPage.scheduleDocs.map((line, i) => (
                        <p key={i}>{line}</p>
                    ))}
                </div>
            </div>
        </section>
    );
}
