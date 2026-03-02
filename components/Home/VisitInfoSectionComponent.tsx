/* 
  Секция контактов (VisitInfoSectionComponent)
  Pinterest-style: Карточки с иконками, мягким фоном и акцентными кнопками.
*/

import React from 'react';
import Link from 'next/link';
import styles from './VisitInfoSectionComponent.module.css';

export default function VisitInfoSectionComponent() {
    const contactLinks = [
        { label: 'Адрес', value: 'Астана, район Орда Базар', icon: '📍', color: '#fef3c7' },
        { label: 'Телефон', value: '+7 (701) 123 45 67', icon: '📞', color: '#dcfce7' },
        { label: 'График', value: '09:00 — 21:00', icon: '🕒', color: '#faedcd' }
    ];

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Приходите в гости</h2>
                    <p className={styles.subtitle}>Мы всегда рады видеть вас и партнеров нашего центра.</p>
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
                        Позвонить нам
                    </a>
                </div>
            </div>
        </section>
    );
}
