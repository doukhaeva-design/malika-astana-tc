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
    const { language, t } = useLanguage();

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.infoBlock}>
                    <h2>{language === 'ru' ? 'Направления работы' : 'Areas of Work'}</h2>
                    <ul>
                        <li>{language === 'ru' ? 'Физическая реабилитация' : 'Physical rehabilitation'}</li>
                        <li>{language === 'ru' ? 'Восстановление после травм' : 'Recovery after injuries'}</li>
                        <li>{language === 'ru' ? 'Консультации специалистов' : 'Specialist consultations'}</li>
                    </ul>
                </div>
                <div className={styles.infoBlock}>
                    <h2>{language === 'ru' ? 'Контактная информация' : 'Contact Information'}</h2>
                    <p>{t.common.footerPhone}</p>
                    <p>{language === 'ru' ? 'Адрес: Внутри ТЦ MALIKA, 2 этаж' : 'Address: Inside MALIKA Mall, 2nd floor'}</p>
                </div>
                <div className={styles.infoBlock}>
                    <h2>{language === 'ru' ? 'График приёма' : 'Reception Schedule'}</h2>
                    <p>{language === 'ru' ? 'Пн–Пт: 09:00 — 18:00' : 'Mon–Fri: 09:00 — 18:00'}</p>
                    <p>{language === 'ru' ? 'Сб: 10:00 — 15:00' : 'Sat: 10:00 — 15:00'}</p>
                    <p>{language === 'ru' ? 'Вс: Выходной' : 'Sun: Closed'}</p>
                </div>
            </div>
        </section>
    );
}
