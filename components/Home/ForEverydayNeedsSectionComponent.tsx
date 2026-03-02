/* 
  Секция направлений (ForEverydayNeedsSectionComponent)
  Pinterest-style: Карточки разного размера, скругленные углы, яркие акценты.
*/

import React from 'react';
import Link from 'next/link';
import styles from './ForEverydayNeedsSectionComponent.module.css';

export default function ForEverydayNeedsSectionComponent() {
    const directions = [
        {
            title: 'Автотовары',
            forWhom: 'владельцы авто',
            desc: 'Всё для эксплуатации и обслуживания вашего автомобиля в одном месте.',
            img: '/category_auto_1772459952993.png',
            color: '#fef3c7' // Amber
        },
        {
            title: 'Техника',
            forWhom: 'профессионалы',
            desc: 'Оборудование и технические решения для эффективного бизнеса.',
            img: '/category_tech_1772459982373.png',
            color: '#dcfce7' // Emerald
        },
        {
            title: 'Дом',
            forWhom: 'уют в мелочах',
            desc: 'Практичные товары для порядка и комфорта в вашем доме.',
            img: '/category_home_1772459996707.png',
            color: '#dbeafe' // Blue
        },
        {
            title: 'Бизнес',
            forWhom: 'предприниматели',
            desc: 'Продукция и решения для коммерческой деятельности.',
            img: '/category_business_supply_v2_1772464118849.png',
            color: '#ffedd5' // Orange
        },
        {
            title: 'Сервис',
            desc: 'Мелкий ремонт и бытовые услуги за один визит.',
            img: '/category_service_1772460173357.png',
            color: '#f3e8ff' // Purple
        },
        {
            title: 'Здоровье',
            desc: 'Реабилитационный центр с профессиональным подходом.',
            img: '/rehab_interior_v2_1772460250804.png',
            color: '#faedcd', // Cream 
            hasAction: true
        }
    ];

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Что внутри MALIKA</h2>
                    <p className={styles.subtitle}>Пространство, организованное для ваших задач. Исследуйте наши направления.</p>
                </div>

                <div className={styles.grid}>
                    {directions.map((dir, index) => (
                        <div
                            key={index}
                            className={`${styles.card} animate-fade stagger-${index + 1}`}
                            style={{ backgroundColor: dir.color }}
                        >
                            <div className={styles.cardContent}>
                                {dir.forWhom && <span className={styles.forWhom}>{dir.forWhom}</span>}
                                <h3 className={styles.cardTitle}>{dir.title}</h3>
                                <p className={styles.cardText}>{dir.desc}</p>
                                {dir.hasAction && (
                                    <Link href="/rehab" className={styles.cardBtn}>
                                        Перейти
                                    </Link>
                                )}
                            </div>
                            <div className={styles.imageWrapper}>
                                <img src={dir.img} alt={dir.title} className={styles.cardImage} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
