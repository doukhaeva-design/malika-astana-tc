/* 
  Заголовок страницы (PageHeaderComponent)
  Показывает название текущей страницы и краткое описание.
  Пользователь может сразу понять, в каком разделе сайта он находится.
*/

import React from 'react';
import styles from './PageHeaderComponent.module.css';

interface PageHeaderProps {
    title: string;
    description: string;
}

export default function PageHeaderComponent({ title, description }: PageHeaderProps) {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.divider} />
                <h1 className={styles.title}>{title}</h1>
                <p className={styles.description}>{description}</p>
            </div>
        </section>
    );
}
