"use client";

import Link from 'next/link';
import styles from './SpaceShowcaseComponent.module.css';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function SpaceShowcaseComponent() {
    const { t, language } = useLanguage();

    const facts = language === 'ru'
        ? [
            'Автозапчасти, товары для дома и бизнеса',
            'Сервисы и центр реабилитации',
            'Удобный подъезд и парковка',
        ]
        : [
            'Auto parts, home and business goods',
            'Services and rehabilitation center',
            'Easy access and parking',
        ];

    return (
        <section className={styles.section}>
            <div className={styles.bgWrapper}>
                <img
                    src="/space_showcase_1772459938757.jpg"
                    alt="Malika Interior"
                    className={styles.bgImage}
                />
                <div className={styles.overlay} />
            </div>

            <div className={styles.container}>
                <div className={`${styles.content} animate-fade`}>
                    <span className={styles.serifSubtitle}>
                        {t.spaceShowcase.subtitle}
                    </span>
                    <h2 className={styles.title}>
                        {t.spaceShowcase.title}
                    </h2>
                    <p className={styles.text}>
                        {t.spaceShowcase.extra}
                    </p>

                    <ul className={styles.factsList}>
                        {facts.map((fact, i) => (
                            <li key={i} className={styles.factItem}>
                                <span className={styles.factDash} />
                                {fact}
                            </li>
                        ))}
                    </ul>

                    <Link href="/tenants" className={styles.btn}>
                        {language === 'ru' ? 'Стать арендатором' : 'Become a Tenant'}
                    </Link>
                </div>
            </div>
        </section>
    );
}
