/* 
  Секция "Ищете площадку для бизнеса?" (SoftTenantSectionComponent)
  Привлекает потенциальных арендаторов.
  Пользователь может узнать о возможности аренды и перейти к детальному разделу.
*/

import React from 'react';
import styles from './SoftTenantSectionComponent.module.css';

export default function SoftTenantSectionComponent() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h2 className={styles.title}>Ищете площадку для бизнеса?</h2>
                    <p className={styles.text}>
                        MALIKA предлагает торговые и складские помещения в активной торговой зоне Астаны.
                        Компактная структура и стабильный поток посетителей создают условия для устойчивой работы.
                    </p>
                    <p className={styles.extra}>
                        Мы открыты к сотрудничеству с предпринимателями, заинтересованными в долгосрочном развитии.
                    </p>
                    <button className={styles.btn}>Узнать условия аренды</button>
                </div>
            </div>
        </section>
    );
}
