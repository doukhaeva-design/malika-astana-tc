/* 
  Детали аренды (RentDetailsComponent)
  Инфраструктура и условия в виде списков.
*/

"use client";

import React from 'react';
import styles from './RentDetailsComponent.module.css';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function RentDetailsComponent() {
    const { t, language } = useLanguage();

    const infraItems = language === 'ru' ? [
        { label: 'Парковка', value: 'Зона на 500+ авто' },
        { label: 'Охрана', value: '24/7 видеонаблюдение' },
        { label: 'Клининг', value: 'Ежедневная уборка' },
        { label: 'Реклама', value: 'Места на фасаде' }
    ] : [
        { label: 'Parking', value: '500+ spaces' },
        { label: 'Security', value: '24/7 monitoring' },
        { label: 'Cleaning', value: 'Daily maintenance' },
        { label: 'Marketing', value: 'Facade signage' }
    ];

    const termItems = language === 'ru' ? [
        { label: 'Срок аренды', value: 'от 11 месяцев' },
        { label: 'Депозит', value: '1 месяц' },
        { label: 'Каникулы', value: 'Индивидуально' }
    ] : [
        { label: 'Lease term', value: 'from 11 months' },
        { label: 'Deposit', value: '1 month' },
        { label: 'Grace period', value: 'Individual' }
    ];

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    <div className="animate-fade">
                        <h2 className={styles.title}>{t.rentPage.infraTitle}</h2>
                        <ul className={styles.list}>
                            {infraItems.map((item, idx) => (
                                <li key={idx} className={styles.item}>
                                    <span className={styles.label}>{item.label}</span>
                                    <span className={styles.value}>{item.value}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="animate-fade stagger-1">
                        <h2 className={styles.title}>{t.rentPage.termsTitle}</h2>
                        <ul className={styles.list}>
                            {termItems.map((item, idx) => (
                                <li key={idx} className={styles.item}>
                                    <span className={styles.label}>{item.label}</span>
                                    <span className={styles.value}>{item.value}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
