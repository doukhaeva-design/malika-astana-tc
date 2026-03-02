/* 
  Секция "Всё необходимое — в одном месте" (ForEverydayNeedsSectionComponent)
  Показывает основные категории товаров и услуг, доступных в центре.
  Пользователь может быстро увидеть, какие задачи он может решить в MALIKA.
*/

import React from 'react';
import styles from './ForEverydayNeedsSectionComponent.module.css';

export default function ForEverydayNeedsSectionComponent() {
    const needs = [
        { title: 'Автотовары и комплектующие', desc: 'Широкий выбор товаров для обслуживания и эксплуатации автомобилей.' },
        { title: 'Техническое оборудование', desc: 'Оборудование и специализированные решения для бизнеса и частных клиентов.' },
        { title: 'Товары для дома', desc: 'Практичные товары для поддержания порядка и комфорта.' },
        { title: 'Коммерческие товары', desc: 'Продукция и решения для малого и среднего бизнеса.' },
        { title: 'Сервисные услуги', desc: 'Профессиональные услуги на территории комплекса.' }
    ];

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.title}>Всё необходимое — в одном месте</h2>
                <p className={styles.intro}>
                    В MALIKA представлены категории товаров и услуг, которые востребованы каждый день.
                    Здесь удобно решать бытовые и рабочие задачи без лишних поездок и сложных маршрутов.
                </p>
                <div className={styles.grid}>
                    {needs.map((item, index) => (
                        <div key={index} className={styles.card}>
                            <h3 className={styles.cardTitle}>{item.title}</h3>
                            <p className={styles.cardText}>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
