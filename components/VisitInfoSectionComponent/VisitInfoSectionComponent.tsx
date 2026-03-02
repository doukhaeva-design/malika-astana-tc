/* 
  Секция "Планируйте визит" (VisitInfoSectionComponent)
  Показывает контактную информацию и график работы.
  Пользователь может быстро найти адрес, телефон и время работы для планирования посещения.
*/

import React from 'react';
import styles from './VisitInfoSectionComponent.module.css';

export default function VisitInfoSectionComponent() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.title}>Планируйте визит</h2>
                <p className={styles.text}>
                    Мы открыты для посетителей ежедневно. Перед визитом вы можете уточнить график работы и построить маршрут.
                </p>
                <div className={styles.infoWrapper}>
                    <div className={styles.infoItem}>
                        <strong>Адрес</strong>
                        <p>г. Астана, район Орда Базар</p>
                    </div>
                    <div className={styles.infoItem}>
                        <strong>График работы</strong>
                        <p>Ежедневно, 09:00 — 21:00</p>
                    </div>
                    <div className={styles.infoItem}>
                        <strong>Телефон</strong>
                        <p>+7 (XXX) XXX-XX-XX</p>
                    </div>
                </div>
                <div className={styles.actions}>
                    <button className={styles.btnPrimary}>Позвонить</button>
                    <button className={styles.btnSecondary}>Проложить маршрут</button>
                </div>
            </div>
        </section>
    );
}
