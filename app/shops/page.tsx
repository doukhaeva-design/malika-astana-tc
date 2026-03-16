"use client";

/*
  Страница "Каталог" (Shops & Services)
  Заголовок + карточки категорий + блок «Не нашли?»
*/

import CategoryDetailSectionComponent from '@/components/Directions/CategoryDetailSectionComponent';
import FooterComponent from '@/components/Shared/FooterComponent';

export default function ShopsPage() {
    return (
        <main>
            <CategoryDetailSectionComponent />
            <FooterComponent />
        </main>
    );
}
