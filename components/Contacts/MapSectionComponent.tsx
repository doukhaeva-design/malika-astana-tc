"use client";

/* 
  Секция карты (MapSectionComponent)
  Визуализирует местоположение торгового центра на карте.
  Пользователь может легко найти объект на местности и проложить маршрут.
*/

import React, { useState } from 'react';
import styles from './MapSectionComponent.module.css';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function MapSectionComponent() {
    const { language } = useLanguage();
    const [showSelection, setShowSelection] = useState(false);
    const [selectedNav, setSelectedNav] = useState<string | null>(null);

    const navigators = [
        { id: '2gis', name: '2GIS', url: 'https://2gis.kz/astana/search/проезд%2069%2C%201А', icon: '📍', color: '#2ecc71' },
        { id: 'yandex', name: 'Яндекс.Карты', url: 'https://yandex.kz/maps/?text=51.203432,71.495665', icon: '🚗', color: '#f39c12' },
        { id: 'google', name: 'Google Maps', url: 'https://www.google.com/maps/dir/?api=1&destination=51.203432,71.495665', icon: '🌍', color: '#3498db' }
    ];

    const handleNavigate = () => {
        const nav = navigators.find(n => n.id === selectedNav);
        if (nav) {
            window.open(nav.url, '_blank', 'noopener,noreferrer');
            setShowSelection(false);
            setSelectedNav(null);
        }
    };

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.mapHero}>
                    <div className={styles.mapVisual}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2502.1!2d71.493!3d51.203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTEsMjAzNjIuNCI3MSw0OTYyNCI0LjgiRQ!5e0!3m2!1sru!2skz!4v1620000000000!5m2!1sru!2skz"
                            width="100%"
                            height="100%"
                            style={{ border: 0, filter: 'grayscale(0.2) contrast(1.1)' }}
                            allowFullScreen
                            loading="lazy"
                            title="Malika Astana Map"
                        ></iframe>
                    </div>
                    <div className={styles.mapContent}>
                        <span className={styles.accent}>{language === 'ru' ? 'Маршрут' : 'Route'}</span>
                        <h2 className={styles.mapTitle}>{language === 'ru' ? 'Торговый центр MALIKA' : 'MALIKA Shopping Center'}</h2>
                        <p className={styles.mapDescription}>
                            {language === 'ru'
                                ? 'Район Байконыр, Проезд 69, 1А, Астана. Проложите удобный маршрут прямо сейчас.'
                                : 'Baikonyr District, Proyezd 69, 1A, Astana. Get directions right now.'}
                        </p>

                        <div className={styles.selectionWrapper}>
                            <button
                                className={styles.btn}
                                onClick={() => setShowSelection(true)}
                            >
                                {language === 'ru' ? 'ПРОЛОЖИТЬ МАРШРУТ' : 'GET DIRECTIONS'}
                            </button>
                        </div>

                        {/* Pop-up Modal */}
                        {showSelection && (
                            <>
                                <div className={styles.overlay} onClick={() => { setShowSelection(false); setSelectedNav(null); }} />
                                <div className={styles.popup}>
                                    <div className={styles.popupHeader}>
                                        <h3>{language === 'ru' ? 'Выбор навигатора' : 'Select Navigator'}</h3>
                                        <button className={styles.closeBtn} onClick={() => { setShowSelection(false); setSelectedNav(null); }}>
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                                        </button>
                                    </div>
                                    <div className={styles.navigatorMenu}>
                                        {navigators.map((nav) => (
                                            <button
                                                key={nav.id}
                                                className={`${styles.navItem} ${selectedNav === nav.id ? styles.navItemActive : ''}`}
                                                onClick={() => setSelectedNav(nav.id)}
                                                style={{ '--hover-color': nav.color } as any}
                                            >
                                                <span className={styles.navIcon}>{nav.icon}</span>
                                                <span className={styles.navName}>{nav.name}</span>
                                                {selectedNav === nav.id && <span className={styles.checkIcon}>✓</span>}
                                            </button>
                                        ))}
                                    </div>
                                    <div className={styles.popupFooter}>
                                        <button
                                            className={styles.goBtn}
                                            disabled={!selectedNav}
                                            onClick={handleNavigate}
                                        >
                                            {language === 'ru' ? 'ПОЕХАЛИ' : "LET'S GO"}
                                        </button>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
