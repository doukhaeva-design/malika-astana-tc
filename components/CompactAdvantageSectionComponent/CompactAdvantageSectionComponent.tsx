/* 
  Секция "Компактный формат — экономия вашего времени" (CompactAdvantageSectionComponent)
  Показывает преимущество небольшого формата центра.
  Пользователь может понять, почему посещение именно этого комплекса будет быстрым и эффективным.
*/

import React from 'react';
import styles from './CompactAdvantageSectionComponent.module.css';

export default function CompactAdvantageSectionComponent() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h2 className={styles.title}>Компактный формат — экономия вашего времени</h2>
                    <p className={styles.text}>
                        MALIKA — это продуманное пространство без перегруженных галерей и длинных переходов.
                        Все направления расположены удобно и логично. Вы быстро находите нужное и экономите время.
                    </p>
                    <p className={styles.textHighlight}>
                        Компактный формат позволяет сосредоточиться на главном — решении ваших задач.
                    </p>
                </div>
            </div>
        </section>
    );
}
