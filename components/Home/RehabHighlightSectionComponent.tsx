/* 
  Секция Реабилитационного центра (RehabHighlightSectionComponent)
  Акцентный блок на светлом фоне с фото и кнопкой.
  Анимации:
  - Плавное появление (fade-in).
  - Эффект при наведении на кнопку.
*/

import React from 'react';
import styles from './RehabHighlightSectionComponent.module.css';

export default function RehabHighlightSectionComponent() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={`${styles.box} animate-fade`}>
                    <div className={styles.imageWrapper}>
                        <img
                            src="/rehab_interior_v2_1772460250804.png"
                            alt="Rehab Center Interior"
                            className={styles.image}
                        />
                    </div>
                    <div className={styles.content}>
                        <h2 className={styles.title}>
                            Реабилитационный центр на территории
                        </h2>
                        <p className={styles.text}>
                            На территории комплекса работает центр реабилитации, предлагающий профессиональные услуги по восстановлению и поддержанию здоровья.
                            Это удобное решение для тех, кто ценит возможность совмещать повседневные дела и заботу о здоровье.
                        </p>
                        <button className={styles.btn}>Узнать подробнее</button>
                    </div>
                </div>
            </div>
        </section>
    );
}
