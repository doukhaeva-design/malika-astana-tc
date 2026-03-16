"use client";

import styles from './StatsStripComponent.module.css';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function StatsStripComponent() {
    const { language } = useLanguage();

    const stats = language === 'ru'
        ? [
            { value: '4 000 м²', label: 'площадь центра' },
            { value: '3 этажа', label: 'торговых пространств' },
            { value: '50+', label: 'магазинов и сервисов' },
        ]
        : [
            { value: '4,000 m²', label: 'center area' },
            { value: '3 floors', label: 'of retail space' },
            { value: '50+', label: 'shops & services' },
        ];

    return (
        <section className={styles.strip}>
            <div className={styles.container}>
                {stats.map((stat, i) => (
                    <div key={i} className={styles.item}>
                        <span className={styles.value}>{stat.value}</span>
                        <span className={styles.label}>{stat.label}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}
