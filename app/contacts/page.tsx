/* 
  Страница "Контакты" (Contacts)
  Полная информация о способах связи и местонахождении.
  Пользователь может быстро найти нужные данные для связи с администрацией.
*/

import React from 'react';
import HeaderComponent from '@/components/HeaderComponent/HeaderComponent';
import PageHeaderComponent from '@/components/PageHeaderComponent/PageHeaderComponent';
import ContactInfoSectionComponent from '@/components/ContactInfoSectionComponent/ContactInfoSectionComponent';
import MapSectionComponent from '@/components/MapSectionComponent/MapSectionComponent';
import FooterComponent from '@/components/FooterComponent/FooterComponent';

export default function ContactsPage() {
    return (
        <main>
            <HeaderComponent />
            <PageHeaderComponent
                title="Контакты"
                description="Свяжитесь с нами удобным для вас способом. Мы всегда рады ответить на ваши вопросы."
            />
            <ContactInfoSectionComponent />
            <MapSectionComponent />
            <FooterComponent />
        </main>
    );
}
