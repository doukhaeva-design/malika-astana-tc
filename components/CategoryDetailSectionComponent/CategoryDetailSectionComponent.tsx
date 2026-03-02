/* 
  Секция категорий (CategoryDetailSectionComponent)
  Детально описывает основные направления деятельности.
  Пользователь может ознакомиться со спецификой каждой категории товаров или услуг.
*/

import React from 'react';
import styles from './CategoryDetailSectionComponent.module.css';

export default function CategoryDetailSectionComponent() {
    const categories = [
        { title: 'Автотовары', desc: 'Товары и комплектующие для автомобилей, востребованные в ежедневной эксплуатации и обслуживании.' },
        { title: 'Оборудование и техника', desc: 'Практичные решения для бизнеса и частных клиентов: оборудование, специализированные устройства и технические товары.' },
        { title: 'Товары для дома', desc: 'Категория товаров для бытовых задач, поддержания порядка и комфорта.' },
        { title: 'Сервисные услуги', desc: 'Специализированные услуги, оказываемые на территории комплекса.' }
    ];

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                {categories.map((cat, index) => (
                    <div key={index} className={styles.categoryItem}>
                        <h2 className={styles.title}>{cat.title}</h2>
                        <p className={styles.text}>{cat.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
