/* 
  Финальный призыв к действию (FinalCTAComponent)
  Блок перед футером для захвата внимания.
*/

"use client";

import React from 'react';
import Link from 'next/link';
import styles from './FinalCTAComponent.module.css';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function FinalCTAComponent() {
    const { t } = useLanguage();

    return (
        <section className={styles.section}>
            <div className={styles.bgText}>MALIKA</div>
            <div className={styles.container}>
                <div className={`${styles.box} animate-fade-up`}>
                    <h2 className={styles.title}>{t.finalCta.title}</h2>
                    <p className={styles.desc}>
                        {t.finalCta.desc}
                    </p>
                    <div className={styles.actions}>
                        <Link href="/directions" className={styles.btnPrimary}>
                            {t.finalCta.btnRoute}
                        </Link>
                        <Link href="/contacts" className={styles.btnSecondary}>
                            {t.finalCta.btnContact}
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
