/* 
  Секция преимуществ (CompactAdvantageSectionComponent)
  Pinterest-style: Асимметричные блоки с иконками и ярким текстом.
*/

import React from 'react';
import styles from './CompactAdvantageSectionComponent.module.css';

export default function CompactAdvantageSectionComponent() {
    const advantages = [
        { title: 'Локация', desc: 'В центре активно развивающегося района с устойчивым пешеходным и автомобильным трафиком.', color: '#fef5e7', size: 'large', type: 'light' },
        { title: 'Навигация', desc: 'Продуманные потоки посетителей и удобный доступ к пространствам.', color: '#e6f2ed', size: 'small', type: 'light' },
        { title: 'Бизнес', desc: 'Форматы и условия, рассчитанные на устойчивый рост вашего бизнеса.', color: '#e2e8f0', size: 'small', type: 'light' },
        { title: 'Комфорт', desc: 'Современные системы климата, светлые холлы и зоны ожидания.', color: '#e0f2fe', size: 'large', type: 'light' },
        { title: 'Парковка', desc: 'Просторный и удобный паркинг для гостей.', color: '#f3f4f6', size: 'small', type: 'light' },
        { title: 'Партнерство', desc: 'Гибкие условия сотрудничества для арендаторов центра.', color: '#faebd7', size: 'small', type: 'light' }
    ];

    return (
        <section className={styles.section} id="why-malika">
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Почему MALIKA?</h2>
                    <p className={styles.subtitle}>Архитектурный подход к комфорту и эффективная среда для развития вашего дела.</p>
                </div>

                <div className={styles.grid}>
                    {advantages.map((item, index) => (
                        <div
                            key={index}
                            className={`${styles.card} ${styles[item.size]} ${item.type === 'dark' ? styles.darkCard : ''}`}
                            style={{
                                backgroundColor: item.type === 'dark' ? '' : item.color,
                                animationDelay: `${index * 0.1}s`
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
