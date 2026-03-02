This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.



Правила проекта MALIKA

1. Использовать папку app/ для страниц и маршрутов.
2. Использовать папку components/ для всех секций и переиспользуемых блоков.
3. Страницы должны быть короткими и собираться из компонентов.
4. Каждая крупная секция — отдельный .tsx файл.
5. У каждого компонента свой ComponentName.module.css.
6. Не дублировать большие блоки интерфейса внутри страниц.
7. Почти каждый .tsx файл должен начинаться с заголовочного комментария, который простым языком объясняет:
   - для чего нужен файл
   - что он показывает
   - что пользователь может здесь сделать
8. Все части с логикой должны иметь комментарий выше:
   - обработчики кликов
   - отправка формы
   - автоматические действия
   - условное отображение блоков
9. Комментарии писать простым языком и поддерживать их актуальными.
10. Не добавлять сложную логику без необходимости.
11. Не добавлять функции “на будущее”.
12. Не использовать HOC.
13. Не использовать render props.
14. Не создавать кастомные хуки без явной необходимости.
15. Не подключать лишние библиотеки без прямой задачи.
16. Все изменения должны быть локальными и не ломать существующую структуру.
17. Не переписывать весь проект ради одной правки.
18. Предпочитать простые и понятные решения вместо сложных архитектурных схем.
19. Работать поэтапно: сначала структура, потом тексты, потом стили, потом интерактивность.
20. Не выполнять все этапы одновременно.
21. Если какое-то правило невозможно выполнить, сначала объяснить причину, а не менять архитектуру автоматически.