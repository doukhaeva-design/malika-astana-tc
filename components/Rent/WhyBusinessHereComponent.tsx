/* 
  Секция преимуществ для бизнеса (WhyBusinessHereComponent)
  Показывает выгоды от аренды площадей именно в этом ТЦ.
  Пользователь (предприниматель) может оценить потенциал расположения и структуры.
*/

"use client";

import React from 'react';
import styles from './WhyBusinessHereComponent.module.css';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function WhyBusinessHereComponent() {
    const { language } = useLanguage();

    const reasons = language === 'ru' ? [
        { title: 'Активная торговая зона', desc: 'Расположение в районе с устойчивым потоком посетителей.' },
        { title: 'Компактная структура', desc: 'Понятная планировка без лишних переходов.' },
        { title: 'Удобная логистика', desc: 'Доступность для клиентов и поставщиков.' },
        { title: 'Потенциал развития', desc: 'Возможность расширения и долгосрочного сотрудничества.' }
    ] : [
        { title: 'Active Trading Zone', desc: 'Location in an area with a steady flow of visitors.' },
        { title: 'Compact Structure', desc: 'Clear layout without unnecessary transitions.' },
        { title: 'Convenient Logistics', desc: 'Accessibility for clients and suppliers.' },
        { title: 'Development Potential', desc: 'Opportunity for expansion and long-term cooperation.' }
    ];

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    {reasons.map((reason, index) => (
                        <div key={index} className={styles.card}>
                            <h3 className={styles.cardTitle}>{reason.title}</h3>
                            <p className={styles.cardText}>{reason.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
