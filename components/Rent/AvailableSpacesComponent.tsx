/* 
  Секция "Доступные помещения" (AvailableSpacesComponent)
  Показывает различные форматы площадей для аренды.
  Пользователь может узнать о доступных типах недвижимости для бизнеса.
*/

"use client";

import React from 'react';
import styles from './AvailableSpacesComponent.module.css';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function AvailableSpacesComponent() {
    const { t } = useLanguage();

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <p className={styles.intro}>{t.rentPage.availableIntro}</p>
                <div className={styles.list}>
                    {t.rentPage.availableSpaces.map((space, index) => (
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
