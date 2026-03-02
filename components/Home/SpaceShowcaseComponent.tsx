/* 
  Секция "Пространство MALIKA" (SpaceShowcaseComponent)
  Визуальный акцент на архитектуру и атмосферу центра.
  Анимации:
  - Фото появляется снизу (slide-up).
  - Текст появляется с задержкой.
*/

import React from 'react';
import styles from './SpaceShowcaseComponent.module.css';

export default function SpaceShowcaseComponent() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    <div className={`${styles.imageWrapper} animate-slide`}>
                        <img
                            src="/space_showcase_1772459938757.png"
                            alt="Comfortable space MALIKA"
                            className={styles.image}
                        />
                    </div>
                    <div className={`${styles.content} animate-fade stagger-2`}>
                        <h2 className={styles.title}>
                            Комфортное пространство для повседневных решений
                        </h2>
                        <p className={styles.text}>
                            Продуманная планировка, удобная навигация и спокойная атмосфера.
                            MALIKA — это место, где архитектурная чистота встречается с функциональностью.
                        </p>
                        <div className={styles.decorationLine}></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
