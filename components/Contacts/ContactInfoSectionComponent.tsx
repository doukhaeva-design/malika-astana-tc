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
    const { t } = useLanguage();

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.infoGrid}>
                    <div className={styles.infoCard}>
                        <h3>{t.contactInfo.addressTitle}</h3>
                        <p>{t.common.footerAddress}</p>
                    </div>
                    <div className={styles.infoCard}>
                        <h3>{t.contactInfo.phoneTitle}</h3>
                        <p>{t.common.footerPhone}</p>
                    </div>
                    <div className={styles.infoCard}>
                        <h3>Email</h3>
                        <p>akasalym.renta@gmail.com</p>
                    </div>
                    <div className={styles.infoCard}>
                        <h3>{t.contactInfo.hoursTitle}</h3>
                        <p>{t.contactInfo.hoursDaily}</p>
                        <p>09:00 — 18:00</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
