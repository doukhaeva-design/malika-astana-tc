"use client";

import styles from './WhyVisitComponent.module.css';
import { useLanguage } from '@/lib/i18n/LanguageContext';

const icons = [
    /* Рядом с трассой */
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>,
    /* Парковка */
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M9 17V7h4a3 3 0 0 1 0 6H9" /></svg>,
    /* Несколько задач за визит */
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>,
];

export default function WhyVisitComponent() {
    const { language } = useLanguage();

    const items = language === 'ru'
        ? [
            { title: 'Рядом с трассой Алаш', desc: 'Заезд с двух улиц. Доступен общественный транспорт.' },
            { title: 'Парковка на 50+ мест', desc: 'Бесплатная парковка на территории центра.' },
            { title: 'Несколько задач за один визит', desc: 'Запчасти, товары для дома, оборудование, сервисы и столовая — не нужно ехать в разные места.' },
        ]
        : [
            { title: 'Near Alash Highway', desc: 'Access from two streets. Public transport available.' },
            { title: 'Parking for 50+ cars', desc: 'Free parking on the center premises.' },
            { title: 'Multiple tasks in one visit', desc: 'Auto parts, home goods, equipment, services, and a canteen — no need to drive to different places.' },
        ];

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2 className={`${styles.title} animate-fade`}>
                    {language === 'ru' ? 'Заезжайте по пути' : 'Stop by on your way'}
                </h2>
                <div className={styles.grid}>
                    {items.map((item, idx) => (
                        <div key={idx} className={`${styles.card} animate-fade stagger-${idx + 1}`}>
                            <div className={styles.iconBox}>
                                {icons[idx]}
                            </div>
                            <div>
                                <h3 className={styles.cardTitle}>{item.title}</h3>
                                <p className={styles.cardText}>{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
