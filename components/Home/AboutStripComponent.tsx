"use client";

import styles from './AboutStripComponent.module.css';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function AboutStripComponent() {
    const { language } = useLanguage();

    const stats = language === 'ru'
        ? [
            { value: '4 000 м²', label: 'площадь центра' },
            { value: '3 этажа', label: 'торговых пространств' },
            { value: '50+', label: 'мест парковки' },
        ]
        : [
            { value: '4,000 m²', label: 'center area' },
            { value: '3 floors', label: 'of retail space' },
            { value: '50+', label: 'parking spots' },
        ];

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                {stats.map((stat, i) => (
                    <div key={i} className={styles.statItem}>
                        <span className={styles.value}>{stat.value}</span>
                        <span className={styles.label}>{stat.label}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}
