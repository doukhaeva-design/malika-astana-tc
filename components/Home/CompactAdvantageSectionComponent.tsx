/* 
  Секция преимуществ (CompactAdvantageSectionComponent)
  Показывает преимущества в виде сетки 2x2.
  Анимации:
  - Появление карточек по цепочке (stagger animation).
*/

import React from 'react';
import styles from './CompactAdvantageSectionComponent.module.css';

export default function CompactAdvantageSectionComponent() {
    const advantages = [
        { title: 'Компактный формат', desc: 'Экономия вашего времени: все нужное в шаговой доступности.' },
        { title: 'Логичная навигация', desc: 'Продуманное пространство без лишних переходов.' },
        { title: 'Фокус на главном', desc: 'Решение ваших задач без перегруженных галерей.' },
        { title: 'Стабильность', desc: 'Практичное место для ежедневного посещения.' }
    ];

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    {advantages.map((item, index) => (
                        <div
                            key={index}
                            className={`${styles.card} animate-slide stagger-${index + 1}`}
                        >
                            <h3 className={styles.cardTitle}>{item.title}</h3>
                            <p className={styles.cardText}>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
