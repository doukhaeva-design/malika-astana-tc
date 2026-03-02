/* 
  Секция контактов (VisitInfoSectionComponent)
  Commercial Style: Четкие информационные блоки, акцент на контакты и навигацию.
*/

import React from 'react';
import Link from 'next/link';
import styles from './VisitInfoSectionComponent.module.css';

export default function VisitInfoSectionComponent() {
    const contactLinks = [
        { label: 'Адрес центра', value: 'г. Астана, район Орда Базар', icon: '📍', color: '#f8fafc' },
        { label: 'Контактный телефон', value: '+7 (701) 123 45 67', icon: '📞', color: '#f0f9ff' },
        { label: 'Режим работы', value: 'Ежедневно, 09:00 — 21:00', icon: '🕒', color: '#f1f5f9' }
    ];

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Планируйте ваш визит</h2>
                    <p className={styles.subtitle}>Мы открыты для посетителей и партнеров ежедневно. Постройте удобный маршрут.</p>
                </div>

                <div className={styles.grid}>
                    {contactLinks.map((item, index) => (
                        <div
                            key={index}
                            className={`${styles.card} animate-fade stagger-${index + 1}`}
                            style={{ backgroundColor: item.color }}
                        >
                            <span className={styles.icon}>{item.icon}</span>
                            <div className={styles.cardInfo}>
                                <p className={styles.label}>{item.label}</p>
                                <p className={styles.value}>{item.value}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={styles.actions}>
                    <Link href="/contacts" className={styles.btnRoute}>
                        Проложить маршрут
                    </Link>
                    <a href="tel:+77011234567" className={styles.btnCall}>
                        Позвонить администратору
                    </a>
                </div>
            </div>
        </section>
    );
}
