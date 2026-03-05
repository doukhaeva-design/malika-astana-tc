/* 
  Секция преимуществ (CompactAdvantageSectionComponent)
  Pinterest-style: Асимметричные блоки с иконками и ярким текстом.
*/

"use client";

import React from 'react';
import styles from './CompactAdvantageSectionComponent.module.css';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function CompactAdvantageSectionComponent() {
    const { language } = useLanguage();

    const advantages = language === 'ru' ? [
        { title: 'Доступность', desc: 'Удобный заезд с главной дороги. Не нужно кружить по кварталам — мы прямо у шоссе.', color: '#fef5e7', size: 'large', type: 'light' },
        { title: 'Экономия времени', desc: 'Формат «зашел — купил — вышел». Всё компактно и под рукой.', color: '#e6f2ed', size: 'small', type: 'light' },
        { title: 'Ваш старт', desc: 'Помещения любого формата: от небольших точек до крупных отделов.', color: '#e2e8f0', size: 'small', type: 'light' },
        { title: 'Порядок', desc: 'Чистая территория, охрана и коммуникации. Занимайтесь делом, об остальном позаботимся мы.', color: '#e0f2fe', size: 'large', type: 'light' },
        { title: 'Место для авто', desc: 'Забудьте о проблемах с парковкой. У нас места хватит всем гостям.', color: '#f3f4f6', size: 'small', type: 'light' },
        { title: 'Партнерство', desc: 'Гибко подходим к каждому арендатору. Нам важно, чтобы ваше дело росло.', color: '#faebd7', size: 'small', type: 'light' }
    ] : [
        { title: 'Accessibility', desc: 'Convenient access from the main road. No need to circle the blocks — we are right by the highway.', color: '#fef5e7', size: 'large', type: 'light' },
        { title: 'Time Saving', desc: 'A quick "in and out" format. Everything is compact and close at hand.', color: '#e6f2ed', size: 'small', type: 'light' },
        { title: 'Your Start', desc: 'Spaces of any format: from small spots to large departments.', color: '#e2e8f0', size: 'small', type: 'light' },
        { title: 'Order', desc: 'Clean territory, security, and communications. Focus on your business, we will take care of the rest.', color: '#e0f2fe', size: 'large', type: 'light' },
        { title: 'Parking Space', desc: 'Forget about parking problems. We have enough space for all guests.', color: '#f3f4f6', size: 'small', type: 'light' },
        { title: 'Partnership', desc: 'We take a flexible approach to each tenant. It is important to us that your business grows.', color: '#faebd7', size: 'small', type: 'light' }
    ];

    return (
        <section className={styles.section} id="why-malika">
            <div className={styles.container}>
                <div className={`${styles.header} animate-fade`}>
                    <h2 className={styles.title}>{language === 'ru' ? 'Почему MALIKA?' : 'Why MALIKA?'}</h2>
                    <p className={styles.subtitle}>
                        {language === 'ru'
                            ? 'Место, где удобно решать дела: от покупок для дома до сервисов для авто. Понятные условия аренды, свободная парковка и комфорт для ежедневных визитов.'
                            : 'A place where it is convenient to handle matters: from home purchases to auto services. Clear rental conditions, free parking, and comfort for daily visits.'}
                    </p>
                </div>

                <div className={styles.grid}>
                    {advantages.map((item, index) => (
                        <div
                            key={index}
                            className={`${styles.card} ${styles[item.size]} ${item.type === 'dark' ? styles.darkCard : ''} animate-fade`}
                            style={{
                                backgroundColor: item.type === 'dark' ? '' : item.color,
                                transitionDelay: `${index * 0.1}s`
                            }}
                        >
                            <h3 className={styles.cardTitle}>{item.title}</h3>
                            <p className={styles.cardText}>{item.desc}</p>
                            <div className={styles.circleMain}></div>
                            <div className={styles.circleSmall}></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
