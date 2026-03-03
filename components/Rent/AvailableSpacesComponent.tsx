/* 
  Секция "Доступные помещения" (AvailableSpacesComponent)
  Показывает различные форматы площадей для аренды.
  Пользователь может узнать о доступных типах недвижимости для бизнеса.
*/

import React from 'react';
import styles from './AvailableSpacesComponent.module.css';

export default function AvailableSpacesComponent() {
    const spaces = [
        { title: 'Торговые помещения', desc: 'Помещения в аренду от 50 м² под магазины и розничную торговлю.' },
        { title: 'Складские площади', desc: 'Для хранения и логистических задач.' },
        { title: 'Коммерческие участки', desc: 'Для специализированных проектов.' }
    ];

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <p className={styles.intro}>Мы предлагаем различные форматы коммерческих помещений.</p>
                <div className={styles.list}>
                    {spaces.map((space, index) => (
                        <div key={index} className={styles.spaceItem}>
                            <h3 className={styles.title}>{space.title}</h3>
                            <p className={styles.text}>{space.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
