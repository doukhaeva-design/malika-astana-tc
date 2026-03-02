/* 
  Секция контактов (VisitInfoSectionComponent)
  Вдохновлено блоком 'Annuaire de contacts' с карточками контактов.
*/

import React from 'react';
import Link from 'next/link';
import styles from './VisitInfoSectionComponent.module.css';

export default function VisitInfoSectionComponent() {
    const categories = [
        { label: 'Адрес центра', value: 'г. Астана, район Орда Базар', icon: '📍' },
        { label: 'Контактный номер', value: '+7 (701) 123 45 67', icon: '📞' },
        { label: 'Режим работы', value: '09:00 — 21:00, ежедневно', icon: '🕒' }
    ];

    return (
        <section className={styles.section} id="visit">
            <div className={styles.container}>
                <div className={styles.layout}>
                    {/* Main Info Box */}
                    <div className={styles.mainBox}>
                        <h2 className={styles.title}>Планируйте ваш визит</h2>
                        <p className={styles.text}>
                            Мы открыты для посетителей и партнеров ежедневно. Находите нужные контакты администрации и сервисного центра MALIKA.
                        </p>
                        <Link href="/contacts" className={styles.mainBtn}>
                            ВСЕ КОНТАКТЫ
                        </Link>
                    </div>

                    {/* Smaller Cards Grid */}
                    <div className={styles.sideGrid}>
                        {categories.map((cat, index) => (
                            <div key={index} className={styles.catCard}>
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
