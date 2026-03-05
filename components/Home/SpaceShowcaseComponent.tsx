/* 
  Секция пространства (SpaceShowcaseComponent)
  'Wow' Effect: Полноэкранный иммерсивный блок с параллакс-ощущением и крупным заголовком.
*/

"use client";

import React from 'react';
import styles from './SpaceShowcaseComponent.module.css';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function SpaceShowcaseComponent() {
    const { language } = useLanguage();

    return (
        <section className={styles.section}>
            <div className={styles.bgWrapper}>
                <img
                    src="/space_showcase_1772459938757.png"
                    alt="Malika Interior"
                    className={styles.bgImage}
                />
                <div className={styles.overlay}></div>
            </div>

            <div className={styles.container}>
                <div className={`${styles.content} animate-fade`}>
                    <span className={styles.badge}>{language === 'ru' ? 'Экономия времени' : 'Time Saving'}</span>
                    <h2 className={styles.title}>
                        {language === 'ru' ? (
                            <>Все нужные сервисы <br /> в одном центре</>
                        ) : (
                            <>All necessary services <br /> in one center</>
                        )}
                    </h2>
                    <p className={styles.text}>
                        {language === 'ru'
                            ? 'Широкий выбор магазинов, товаров и услуг повседневного спроса, собранных под одной крышей для вашего удобства.'
                            : 'A wide selection of shops, goods, and everyday services gathered under one roof for your convenience.'}
                    </p>
                    <div className={styles.stats}>
                        <div className={styles.statItem}>
                            <span className={styles.num}>150+</span>
                            <span className={styles.label}>{language === 'ru' ? 'Торговых точек' : 'Retail spaces'}</span>
                        </div>
                        <div className={styles.statItem}>
                            <span className={styles.num}>2500м²</span>
                            <span className={styles.label}>{language === 'ru' ? 'Площадь центра' : 'Center area'}</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
