/* 
  Секция категорий (CategoryDetailSectionComponent)
  Детально описывает основные направления деятельности.
  Пользователь может ознакомиться со спецификой каждой категории товаров или услуг.
*/

"use client";

import React from 'react';
import styles from './CategoryDetailSectionComponent.module.css';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function CategoryDetailSectionComponent() {
    const { language } = useLanguage();

    const categories = language === 'ru' ? [
        { title: 'Автотовары', desc: 'Товары и комплектующие для автомобилей, востребованные в ежедневной эксплуатации и обслуживании.' },
        { title: 'Оборудование и техника', desc: 'Практичные решения для бизнеса и частных клиентов: оборудование, специализированные устройства и технические товары.' },
        { title: 'Товары для дома', desc: 'Категория товаров для бытовых задач, поддержания порядка и комфорта.' },
        { title: 'Сервисные услуги', desc: 'Специализированные услуги, оказываемые на территории комплекса.' }
    ] : [
        { title: 'Auto Goods', desc: 'Goods and components for cars in demand for daily operation and maintenance.' },
        { title: 'Equipment and Tech', desc: 'Practical solutions for business and private clients: equipment, specialized devices, and tech goods.' },
        { title: 'Home Goods', desc: 'Category of goods for household tasks, maintaining order and comfort.' },
        { title: 'Services', desc: 'Specialized services provided on the premises of the complex.' }
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
