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
            <div className={styles.mapWrapper}>
                <div className={styles.mapVisual}>
                    <div className={styles.mapOverlay}></div>
                    <div className={styles.mapContent}>
                        <div className={styles.marker}>
                            <div className={styles.markerDot}></div>
                        </div>
                        <h3 className={styles.mapTitle}>MALIKA</h3>
                        <p className={styles.mapAddress}>Астана, Байконыр, проезд 69, 1А</p>
                        <button className={styles.btn}>ОТКРЫТЬ КАРТУ</button>
                    </div>
                </div>
            </div>
        </section>
    );
}
