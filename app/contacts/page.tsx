/* 
  Страница "Контакты" (Contacts)
  Полная информация о способах связи и местонахождении.
  Пользователь может быстро найти нужные данные для связи с администрацией.
*/

import React from 'react';
import HeaderComponent from '@/components/Shared/HeaderComponent';
import PageHeaderComponent from '@/components/Shared/PageHeaderComponent';
import ContactInfoSectionComponent from '@/components/Contacts/ContactInfoSectionComponent';
import MapSectionComponent from '@/components/Contacts/MapSectionComponent';
import FooterComponent from '@/components/Shared/FooterComponent';

export default function ContactsPage() {
    return (
        <main>
            <HeaderComponent />
            <MapSectionComponent />
            <PageHeaderComponent
                title="Контакты"
                description="Свяжитесь с нами удобным для вас способом. Мы всегда рады ответить на ваши вопросы."
            />
            <ContactInfoSectionComponent />
            <FooterComponent />
        </main>
    );
}
