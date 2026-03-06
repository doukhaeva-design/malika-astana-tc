/* 
  Секция методик (MethodsSectionComponent)
  Показывает доступные методы восстановления.
*/

"use client";

import React from 'react';
import styles from './MethodsSectionComponent.module.css';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function MethodsSectionComponent() {
    const { t } = useLanguage();

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.title}>{t.rehabPage.methodsTitle}</h2>
                <div className={styles.grid}>
                    {t.rehabPage.methods.map((method, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.number}>0{index + 1}</div>
                            <h3 className={styles.methodTitle}>{method.title}</h3>
                            <p className={styles.methodDesc}>{method.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
