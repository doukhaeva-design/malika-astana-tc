"use client";

import Link from 'next/link';
import styles from './SpaceShowcaseComponent.module.css';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function SpaceShowcaseComponent() {
    const { t, language } = useLanguage();

    const facts = language === 'ru'
        ? [
            'Около 3 га свободной земли',
            'Построено новое здание на территории',
            'Заезд с двух улиц, первая линия',
        ]
        : [
            'About 3 hectares of available land',
            'New building already constructed on-site',
            'Access from two streets, first line',
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
                        {t.spaceShowcase.desc}
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
