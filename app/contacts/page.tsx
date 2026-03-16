"use client";

/*
  Страница "Контакты"
  1. Контактная информация (встроенный заголовок + карточки)
  2. Карта
*/

import ContactInfoSectionComponent from '@/components/Contacts/ContactInfoSectionComponent';
import MapSectionComponent from '@/components/Contacts/MapSectionComponent';
import FooterComponent from '@/components/Shared/FooterComponent';

export default function ContactsPage() {
    return (
        <main>
            <ContactInfoSectionComponent />
            <MapSectionComponent />
            <FooterComponent />
        </main>
    );
}
