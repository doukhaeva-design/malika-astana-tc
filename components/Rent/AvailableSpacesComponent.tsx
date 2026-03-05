/* 
  Секция "Доступные помещения" (AvailableSpacesComponent)
  Показывает различные форматы площадей для аренды.
  Пользователь может узнать о доступных типах недвижимости для бизнеса.
*/

"use client";

import React from 'react';
import styles from './AvailableSpacesComponent.module.css';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function AvailableSpacesComponent() {
    const { language } = useLanguage();

    const spaces = language === 'ru' ? [
        { title: 'Торговые помещения', desc: 'Помещения в аренду от 50 м² под магазины и розничную торговлю.' },
        { title: 'Складские площади', desc: 'Для хранения и логистических задач.' },
        { title: 'Коммерческие участки', desc: 'Для специализированных проектов.' }
    ] : [
        { title: 'Retail Spaces', desc: 'Premises for rent from 50 square meters for shops and retail.' },
        { title: 'Warehouse Areas', desc: 'For storage and logistics tasks.' },
        { title: 'Commercial Lots', desc: 'For specialized projects.' }
    ];

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <p className={styles.intro}>{language === 'ru' ? 'Мы предлагаем различные форматы коммерческих помещений.' : 'We offer various formats of commercial premises.'}</p>
                <div className={styles.list}>
                    {spaces.map((space, index) => (
                        <div key={index} className={styles.spaceItem}>
                            <h3 className={styles.title}>{space.title}</h3>
                            <p className={styles.text}>{space.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
