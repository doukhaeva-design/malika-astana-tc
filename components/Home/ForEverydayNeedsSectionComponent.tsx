/* 
  Секция направлений (ForEverydayNeedsSectionComponent)
  Вдохновлено муниципальным стилем с карточками (À vos agendas).
*/

import React from 'react';
import Link from 'next/link';
import styles from './ForEverydayNeedsSectionComponent.module.css';

export default function ForEverydayNeedsSectionComponent() {
    const directions = [
        {
            title: 'Здоровье',
            forWhom: 'Реабилитация',
            desc: 'Профессиональный центр восстановления',
            img: '/rehab_interior_v2_1772460250804.png',
            isSpecial: true
        },
        {
            title: 'Автотовары',
            forWhom: 'Владельцы авто',
            desc: 'Весь спектр запчастей и аксессуаров',
            img: '/category_auto_1772459952993.png'
        },
        {
            title: 'Техника',
            forWhom: 'Бизнес-решения',
            desc: 'Промышленное и офисное оборудование',
            img: '/category_tech_1772459982373.png'
        },
        {
            title: 'Бизнес',
            forWhom: 'Предприниматели',
            desc: 'Всё для коммерческой деятельности',
            img: '/category_business_supply_v2_1772464118849.png'
        },
        {
            title: 'Дом',
            forWhom: 'Быт и уют',
            desc: 'Товары для интерьера и быта',
            img: '/category_home_1772459996707.png'
        },
        {
            title: 'Сервис',
            forWhom: 'Бытовые услуги',
            desc: 'Ремонт и обслуживание в одном месте',
            img: '/category_service_1772460173357.png'
        }
    ];

    return (
        <section className={styles.section} id="directions">
            <div className={styles.container}>
                <div className={styles.header}>
                    <div className={styles.headerLeft}>
                        <h2 className={styles.title}>Магазины и сервисы <br /> для <span className={styles.accent}>важных задач</span></h2>
                        <p className={styles.subtitle}>Находите всё необходимое для дела и жизни в одном месте.</p>
                    </div>
                    <div className={styles.headerActions}>
                        <button className={styles.arrowBtn}>←</button>
                        <button className={styles.arrowBtn}>→</button>
                        <Link href="/directions" className={styles.viewAll}>ВСЕ НАПРАВЛЕНИЯ</Link>
                    </div>
                </div>
            </div>

            <div className={styles.grid}>
                {directions.map((dir, index) => (
                    <div
                        key={index}
                        className={`${styles.card} animate-fade stagger-${index + 1}`}
                    >
                        <div className={styles.imageWrapper}>
                            <img src={dir.img} alt={dir.title} className={styles.cardImage} />
                        </div>

                        <div className={styles.cardContent}>
                            <div className={styles.cardHeader}>
                                <span className={styles.tag}>{dir.forWhom}</span>
                                <h3 className={styles.cardTitle}>{dir.title}</h3>
                            </div>
                            <p className={styles.cardText}>{dir.desc}</p>

                            <div className={styles.cardFooter}>
                                {dir.isSpecial ? (
                                    <Link href="/rehab" className={styles.btnSpecial}>Подробнее</Link>
                                ) : (
                                    <div className={styles.separator}></div>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
