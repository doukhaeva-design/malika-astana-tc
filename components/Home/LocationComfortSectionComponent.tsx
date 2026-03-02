/* 
  Секция "Удобное расположение" (LocationComfortSectionComponent)
  Показывает расположение ТЦ и удобство доступа.
  Пользователь может узнать о местонахождении и преимуществах доступа к центру.
*/

import React from 'react';
import styles from './LocationComfortSectionComponent.module.css';

export default function LocationComfortSectionComponent() {
    const advantages = [
        { title: 'Удобный заезд', text: 'Простая навигация и доступ с основных направлений.' },
        { title: 'Парковочные возможности', text: 'Доступные парковочные зоны рядом с комплексом.' },
        { title: 'Понятная планировка', text: 'Чёткая организация пространства внутри здания.' }
    ];

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.title}>Удобное расположение</h2>
                <p className={styles.intro}>
                    Торговый центр расположен в районе Орда Базар — зоне с активной торговой инфраструктурой и удобной транспортной доступностью.
                </p>
                <div className={styles.grid}>
                    {advantages.map((item, index) => (
                        <div key={index} className={styles.card}>
                            <h3 className={styles.cardTitle}>{item.title}</h3>
                            <p className={styles.cardText}>{item.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
