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
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.infoGrid}>
                    <div className={styles.infoCard}>
                        <h3>{language === 'ru' ? 'Адрес' : 'Address'}</h3>
                        <p>{t.common.footerAddress}</p>
                    </div>
                    <div className={styles.infoCard}>
                        <h3>{language === 'ru' ? 'Телефон' : 'Phone'}</h3>
                        <p>{t.common.footerPhone}</p>
                    </div>
                    <div className={styles.infoCard}>
                        <h3>Email</h3>
                        <p>akasalym.renta@gmail.com</p>
                    </div>
                    <div className={styles.infoCard}>
                        <h3>{language === 'ru' ? 'График работы' : 'Working hours'}</h3>
                        <p>{language === 'ru' ? 'Ежедневно' : 'Daily'}</p>
                        <p>09:00 — 18:00</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
