/* 
  Секция для предпринимателей (SoftTenantSectionComponent)
  Pinterest-style: Контрастный блок с яркой типографикой.
*/

import React from 'react';
import Link from 'next/link';
import styles from './SoftTenantSectionComponent.module.css';

export default function SoftTenantSectionComponent() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={`${styles.box} animate-slide`}>
                    <div className={styles.content}>
                        <h2 className={styles.title}>Ваш бизнес в <span className={styles.highlight}>MALIKA</span></h2>
                        <p className={styles.text}>
                            Присоединяйтесь к сообществу предпринимателей в динамично развивающемся районе Астаны.
                            Удобные лояльные условия аренды и постоянный поток клиентов.
                        </p>
                        <div className={styles.actions}>
                            <Link href="/rent" className={styles.btn}>
                                Стать партнером
                            </Link>
                        </div>
                    </div>
                    <div className={styles.visuals}>
                        <div className={styles.tag}>Доступные площади</div>
                        <div className={styles.tag}>Прямая аренда</div>
                        <div className={styles.tag}>Выгодное место</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
