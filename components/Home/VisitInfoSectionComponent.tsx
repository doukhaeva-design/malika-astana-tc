/* 
  Секция контактов (VisitInfoSectionComponent)
  Вдохновлено блоком 'Annuaire de contacts' с карточками контактов.
*/

import React from 'react';
import Link from 'next/link';
import styles from './VisitInfoSectionComponent.module.css';

export default function VisitInfoSectionComponent() {
    const categories = [
        { label: 'Адрес центра', value: 'Астана, Байконыр, пр. 69, 1А', icon: '📍' },
        { label: 'Контактный номер', value: '+7 (705) 555-76-09', icon: '📞' },
        { label: 'Режим работы', value: '09:00 — 18:00, ежедневно', icon: '🕒' }
    ];

    return (
        <section className={styles.section} id="visit">
            <div className={styles.container}>
                <div className={styles.layout}>
                    {/* Main Info Box */}
                    <div className={`${styles.mainBox} animate-fade`}>
                        <h2 className={styles.title}>Планируйте ваш визит</h2>
                        <p className={styles.text}>
                            MALIKA открыт для вас ежедневно. Прямая связь с администрацией и сервисными службами центра.
                        </p>
                        <Link href="/contacts" className={styles.mainBtn}>
                            ВСЕ КОНТАКТЫ
                        </Link>
                    </div>

                    {/* Smaller Cards Grid */}
                    <div className={styles.sideGrid}>
                        {categories.map((cat, index) => (
                            <div key={index} className={`${styles.catCard} animate-fade stagger-${index + 1}`} style={{ transitionDelay: `${index * 0.15}s` }}>
                                <div className={styles.catIconWrapper}>
                                    <span className={styles.catIcon}>{cat.icon}</span>
                                    <span className={styles.plus}>+</span>
                                </div>
                                <div className={styles.cardContent}>
                                    <span className={styles.catLabel}>{cat.label}</span>
                                    <h3 className={styles.catValue}>{cat.value}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
