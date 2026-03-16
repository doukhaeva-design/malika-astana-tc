"use client";

import React, { useState, useEffect, useRef } from 'react';
import styles from './SpaceShowcaseComponent.module.css';
import { useLanguage } from '@/lib/i18n/LanguageContext';

function AnimatedNumber({ value, duration = 1500 }: { value: number, duration?: number }) {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                setIsVisible(true);
                observer.disconnect();
            }
        }, { threshold: 0.1 });

        if (elementRef.current) observer.observe(elementRef.current);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isVisible) return;

        let start = 0;
        const end = value;
        const totalFrames = duration / 16;
        const increment = end / totalFrames;

        const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
                setCount(end);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }
        }, 16);

        return () => clearInterval(timer);
    }, [isVisible, value, duration]);

    return <span ref={elementRef}>{count}</span>;
}

export default function SpaceShowcaseComponent() {
    const { t, language } = useLanguage();

    return (
        <section className={styles.section}>
            <div className={styles.bgWrapper}>
                <img
                    src="/space_showcase_1772459938757.png"
                    alt="Malika Interior"
                    className={styles.bgImage}
                />
                <div className={styles.overlay}></div>
            </div>

            <div className={styles.container}>
                <div className={`${styles.content} animate-fade`}>
                    <div className={styles.subtitleWrapper}>
                        <span className={styles.serifSubtitle}>
                            {t.spaceShowcase.subtitle}
                        </span>
                    </div>
                    <h2 className={styles.title}>
                        {t.spaceShowcase.title}
                    </h2>
                    <p className={styles.text}>
                        {t.spaceShowcase.desc}
                    </p>
                    
                    <p className={styles.extraText}>
                        {t.spaceShowcase.extra}
                    </p>
                </div>
            </div>
        </section>
    );
}
