/* 
  Секция преимуществ (CompactAdvantageSectionComponent)
  Pinterest-style: Асимметричные блоки с иконками и ярким текстом.
*/

import React from 'react';
import styles from './CompactAdvantageSectionComponent.module.css';

export default function CompactAdvantageSectionComponent() {
    const advantages = [
        { title: 'Компактность', desc: 'Всё нужное рядом. Экономим ваше время.', color: '#faedcd', size: 'large' },
        { title: 'Навигация', desc: 'Понятный маршрут за пару минут.', color: '#dcfce7', size: 'small' },
        { title: 'Бизнес', desc: 'Стабильность для предпринимателей.', color: '#fef3c7', size: 'small' },
        { title: 'Комфорт', desc: 'Светлые холлы и спокойствие.', color: '#dbeafe', size: 'large' }
    ];

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Почему MALIKA?</h2>
                    <p className={styles.subtitle}>Мы создали пространство, которое работает на вас.</p>
                </div>

                <div className={styles.grid}>
                    {advantages.map((item, index) => (
                        <div
                            key={index}
                            className={`${styles.card} ${styles[item.size]} animate-fade stagger-${index + 1}`}
                            style={{ backgroundColor: item.color }}
                        >
                            <h3 className={styles.cardTitle}>{item.title}</h3>
                            <p className={styles.cardText}>{item.desc}</p>
                            <div className={styles.circle}></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
