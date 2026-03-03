/* 
  Секция Реабилитационного центра (RehabHighlightSectionComponent)
  Pinterest-style: Яркий блок-наложение, крупная фото и современная кнопка.
*/

import React from 'react';
import Link from 'next/link';
import styles from './RehabHighlightSectionComponent.module.css';

export default function RehabHighlightSectionComponent() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={`${styles.box} animate-fade`}>
                    <div className={styles.imageWrapper}>
                        <img
                            src="/rehab_interior_v2_1772460250804.png"
                            alt="Rehab Center"
                            className={styles.image}
                        />
                    </div>
                    <div className={styles.content}>
                        <span className={styles.badge}>Здоровье</span>
                        <h2 className={styles.title}>
                            Профессиональный центр восстановления
                        </h2>
                        <p className={styles.text}>
                            Современный медицинский центр на территории торгового комплекса.
                            Удобно совмещать заботу о здоровье с повседневными делами.
                        </p>
                        <Link href="/rehab" className={styles.btn}>
                            Подробнее
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
