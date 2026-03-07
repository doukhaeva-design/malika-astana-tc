/* 
  Секция преимуществ (CompactAdvantageSectionComponent)
  Pinterest-style: Асимметричные блоки с иконками и ярким текстом.
*/

"use client";

import React from 'react';
import styles from './CompactAdvantageSectionComponent.module.css';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function CompactAdvantageSectionComponent() {
    const { t } = useLanguage();

    const advantages = t.advantages.items;

    return (
        <section className={styles.section} id="why-malika">
            <div className={styles.container}>
                <div className={`${styles.header} animate-fade`}>
                    <div className={styles.subtitleWrapper}>
                        <span className={styles.serifSubtitle}>
                            {t.about.title}
                        </span>
                    </div>
                    <h2 className={styles.title}>{t.advantages.title}</h2>
                    <p className={styles.subtitle}>
                        {t.advantages.subtitle}
                    </p>
                </div>

                <div className={styles.grid}>
                    {advantages.map((item: any, index: number) => {
                        const size = (index === 0 || index === 3) ? 'large' : 'small';
                        const type = 'light';

                        return (
                            <div
                                key={index}
                                className={`${styles.card} ${styles[size]} animate-fade stagger-${(index % 4) + 1}`}
                                style={{
                                    backgroundColor: item.color
                                }}
                            >
                                <h3 className={styles.cardTitle}>{item.title}</h3>
                                <p className={styles.cardText}>{item.desc}</p>
                                <div className={styles.circleMain}></div>
                                <div className={styles.circleSmall}></div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
