/* 
  Информационная секция (ContentSectionComponent)
  Детализирует направления работы реабилитационного центра.
  Пользователь может узнать о конкретных услугах, графике приема и контактах.
*/

import React from 'react';
import styles from './ContentSectionComponent.module.css';

export default function ContentSectionComponent() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.infoBlock}>
                    <h2>Направления работы</h2>
                    <ul>
                        <li>Физическая реабилитация</li>
                        <li>Восстановление после травм</li>
                        <li>Консультации специалистов</li>
                    </ul>
                </div>
                <div className={styles.infoBlock}>
                    <h2>Контактная информация</h2>
                    <p>Телефон: +7 (XXX) XXX-XX-XX</p>
                    <p>Адрес: Внутри ТЦ MALIKA, 2 этаж</p>
                </div>
                <div className={styles.infoBlock}>
                    <h2>График приёма</h2>
                    <p>Пн–Пт: 09:00 — 18:00</p>
                    <p>Сб: 10:00 — 15:00</p>
                    <p>Вс: Выходной</p>
                </div>
            </div>
        </section>
    );
}
