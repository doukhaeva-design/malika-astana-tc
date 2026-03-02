/* 
  Секция карты (MapSectionComponent)
  Визуализирует местоположение торгового центра на карте.
  Пользователь может легко найти объект на местности и проложить маршрут.
*/

import React from 'react';
import styles from './MapSectionComponent.module.css';

export default function MapSectionComponent() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.mapPlaceholder}>
                    <p>Интерактивная карта (Yandex / Google Maps)</p>
                    <button className={styles.btn}>Проложить маршрут</button>
                </div>
            </div>
        </section>
    );
}
