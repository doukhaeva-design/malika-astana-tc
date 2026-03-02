/* 
  Секция преимуществ для бизнеса (WhyBusinessHereComponent)
  Показывает выгоды от аренды площадей именно в этом ТЦ.
  Пользователь (предприниматель) может оценить потенциал расположения и структуры.
*/

import React from 'react';
import styles from './WhyBusinessHereComponent.module.css';

export default function WhyBusinessHereComponent() {
    const reasons = [
        { title: 'Активная торговая зона', desc: 'Расположение в районе с устойчивым потоком посетителей.' },
        { title: 'Компактная структура', desc: 'Понятная планировка без лишних переходов.' },
        { title: 'Удобная логистика', desc: 'Доступность для клиентов и поставщиков.' },
        { title: 'Потенциал развития', desc: 'Возможность расширения и долгосрочного сотрудничества.' }
    ];

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    {reasons.map((reason, index) => (
                        <div key={index} className={styles.card}>
                            <h3 className={styles.cardTitle}>{reason.title}</h3>
                            <p className={styles.cardText}>{reason.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
