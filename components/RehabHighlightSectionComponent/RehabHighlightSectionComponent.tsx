/* 
  Секция "Реабилитационный центр на территории" (RehabHighlightSectionComponent)
  Информирует о наличии медицинского или восстановительного центра.
  Пользователь может узнать об уникальной услуге центра и перейти к детальному описанию.
*/

import React from 'react';
import styles from './RehabHighlightSectionComponent.module.css';

export default function RehabHighlightSectionComponent() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h2 className={styles.title}>Реабилитационный центр на территории</h2>
                    <p className={styles.text}>
                        На территории комплекса работает центр реабилитации, предлагающий профессиональные услуги по восстановлению и поддержанию здоровья.
                    </p>
                    <p className={styles.extra}>
                        Это удобное решение для тех, кто ценит возможность совмещать повседневные дела и заботу о здоровье.
                    </p>
                    <button className={styles.btn}>Подробнее</button>
                </div>
            </div>
        </section>
    );
}
