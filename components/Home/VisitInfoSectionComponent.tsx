/* 
  Секция "Планируйте визит" (VisitInfoSectionComponent)
  Показывает контактную информацию и график работы.
  Анимации:
  - Появление карточек по цепочке (stagger animation).
*/

import React from 'react';
import Link from 'next/link';
import styles from './VisitInfoSectionComponent.module.css';

export default function VisitInfoSectionComponent() {
    const infoItems = [
        { title: 'Адрес', text: 'г. Астана, район Орда Базар' },
        { title: 'График работы', text: 'Ежедневно, 09:00 — 21:00' },
        { title: 'Телефон', text: '+7 (XXX) XXX-XX-XX' }
    ];

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.headerBox}>
                    <h2 className={`${styles.title} animate-fade`}>Планируйте визит</h2>
                    <p className={`${styles.subtitle} animate-fade stagger-1`}>
                        Мы открыты для посетителей ежедневно. Перед визитом вы можете уточнить график работы и построить маршрут.
                    </p>
                </div>

                <div className={styles.grid}>
                    {infoItems.map((item, index) => (
                        <div
                            key={index}
                            className={`${styles.card} animate-slide stagger-${index + 1}`}
                        >
                            <h3 className={styles.cardTitle}>{item.title}</h3>
                            <p className={styles.cardText}>{item.text}</p>
                        </div>
                    ))}
                </div>

                <div className={`${styles.actions} animate-fade stagger-4`}>
                    <a href="tel:+70000000000" className={styles.btnPrimary}>
                        Позвонить
                    </a>
                    <Link href="/contacts" className={styles.btnSecondary}>
                        Проложить маршрут
                    </Link>
                </div>
            </div>
        </section>
    );
}
