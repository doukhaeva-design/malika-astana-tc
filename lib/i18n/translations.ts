// lib/i18n/translations.ts

export type Language = 'ru' | 'en';

export const translations = {
    ru: {
        common: {
            address: 'Астана, Шоссе Алаш',
            orientir: 'Ориентир: вдоль Шоссе Алаш',
            hours: 'Ежедневно 09:00 — 18:00',
            route: 'Проложить маршрут',
            home: 'Главная',
            directions: 'Магазины и услуги',
            directionsShort: 'Каталог',
            rehab: 'Реабилитация',
            aboutCenter: 'О центре',
            rent: 'Арендаторам',
            contacts: 'Контакты',
            becomeTenant: 'Стать арендатором',
            more: 'Ещё',
            company: 'Торговый центр MALIKA',
            footerDesc: 'Торговый центр в Астане',
            footerAddress: 'Астана, район Байконыр, Проезд 69, 1А',
            footerPhone: 'Телефон: +7 (700) 305-35-36',
            footerHours: 'Время работы: Ежедневно, 09:00 — 18:00',
            nav: 'Навигация',
            rights: '© 2024 MALIKA. Все права защищены.',
            call: 'Позвонить',
            instagram: 'https://www.instagram.com/malika_astana/',
            whatsapp: 'https://wa.me/77003053536',
        },
        hero: {
            welcome: 'Добро пожаловать',
            in: 'в',
            malika: 'MALIKA',
            title1: 'Торговый центр MALIKA',
            title2: 'Перспективная новая локация',
            desc: 'Товары для бизнеса, дома и автомобилей, сервисы и медицинский центр в одном месте. Удобное расположение рядом с трассой Алаш и быстрый доступ из разных районов города.',
            about: 'О центре',
            scroll: 'Листайте вниз',
            btnPrimary: 'Посмотреть магазины',
            btnSecondary: 'Аренда помещений',
        },
        about: {
            title: 'Торговый центр MALIKA',
            text: 'MALIKA — торговый центр в Байконурском районе Астаны. Здесь работают магазины автозапчастей, хозяйственных и бытовых товаров, оборудование для бизнеса, сервисные компании и медицинский центр реабилитации. Центр ориентирован на повседневные задачи бизнеса и жителей района: покупка запчастей, оборудования, бытовых товаров и получение необходимых услуг в одном месте.',
            shortText: 'Торговый центр в Байконурском районе Астаны. Автозапчасти, оборудование, бытовые товары, сервисы и медицинский центр — всё в одном месте.',
            moreBtn: 'Подробнее о центре',
            heroSubtitle: 'Узнайте больше',
            heroTitle: 'О ЦЕНТРЕ',
            heroDesc: 'Торговый центр MALIKA — практичное пространство для покупок, бизнеса и повседневных решений в Астане.',
            stats: {
                area: '4000 м²',
                floors: '3 этажа',
                parking: 'парковка на 50+ мест'
            }
        },
        advantages: {
            title: 'Удобное место для покупок и бизнеса',
            subtitle: 'Место, где удобно решать дела: от покупок для дома до сервисов для авто. Понятные условия аренды, свободная парковка и комфорт для ежедневных визитов.',
            items: [
                { title: 'Удобный подъезд', desc: 'Центр расположен рядом с трассой Алаш с удобным въездом.', color: '#fef5e7' },
                { title: 'Парковка', desc: 'На территории предусмотрена парковка для посетителей.', color: '#e6f2ed' },
                { title: 'Компактный формат', desc: 'Все магазины и сервисы находятся рядом, что позволяет быстро решить необходимые задачи.', color: '#e2e8f0' },
                { title: 'Безопасность', desc: 'Территория находится под охраной и видеонаблюдением.', color: '#e0f2fe' },
                { title: 'Комфорт для бизнеса', desc: 'Инженерные коммуникации и инфраструктура позволяют работать удобно и стабильно.', color: '#f3f4f6' }
            ]
        },
        directions: {
            title: 'Магазины и услуги',
            subtitle: 'В MALIKA представлены разные категории товаров и сервисов.',
            all: 'Все направления',
            categories: [
                { title: 'Автотовары', desc: 'Запчасти, инструменты и аксессуары для автомобилей.' },
                { title: 'Оборудование и техника', desc: 'Профессиональная техника и оборудование.' },
                { title: 'Товары для дома', desc: 'Всё необходимое для дома и ремонта.' },
                { title: 'Сервисы и услуги', desc: 'Ремонт, обслуживание и профессиональные услуги.' },
                { title: 'Медицина', desc: 'Современный центр реабилитации и восстановления здоровья.' }
            ]
        },
        rehab: {
            title: 'Медицинский центр',
            subtitle: 'Реабилитационный центр, предлагающий программы восстановления здоровья.',
            desc: 'В ТЦ MALIKA находится современный реабилитационный центр, предоставляющий квалифицированную помощь и поддержку для восстановления здоровья.',
            features: [
                'Квалифицированные специалисты',
                'Современное оборудование',
                'Индивидуальный подход',
                'Комфортные условия',
            ],
            btn: 'Подробнее о центре',
        },
        spaceShowcase: {
            title: 'Перспективы MALIKA',
            subtitle: 'Развитие центра',
            desc: 'Торговый центр продолжает развиваться. На территории комплекса: около 3 гектаров свободной земли, уже ведется строительство нового здания, планируется развитие складских и торговых помещений, рассматривается дальнейшее расширение комплекса.',
            extra: 'Развитие центра создаёт дополнительные возможности для арендаторов и увеличивает поток посетителей.'
        },
        rent: {
            title: 'Для арендаторов',
            subtitle: 'Помещения для бизнеса в ТЦ MALIKA',
            desc: 'Торговый центр предлагает помещения для магазинов, сервисных компаний и коммерческих проектов. Администрация центра открыта к сотрудничеству и готова обсуждать условия аренды.',
            btn: 'Стать арендатором',
        },
        visit: {
            title: 'ТЦ MALIKA',
            subtitle: 'Астана, Байконурский район, Проезд 69, 1А. Ориентир — трасса Алаш',
            allContacts: 'Все контакты',
            addressLabel: 'Адрес центра',
            addressVal: 'Проезд 69, 1А (трасса Алаш)',
            phoneLabel: 'Телефон',
            phoneVal: '+7 (700) 305-35-36',
            hoursLabel: 'Время работы',
            hoursVal: '09:00 — 18:00 ежедневно',
        },
        contactInfo: {
            addressTitle: 'Адрес',
            phoneTitle: 'Телефон',
            hoursTitle: 'Время работы',
            hoursDaily: '09:00 — 18:00 ежедневно',
        },
        softTenant: {
            badge: 'Для арендаторов',
            titlePart1: 'Помещения для бизнеса в',
            text: 'Торговый центр предлагает помещения для магазинов, сервисных компаний и коммерческих проектов.',
            btn: 'Стать арендатором',
            infraTitle: 'Для арендаторов предусмотрена удобная инфраструктура:',
            infraItems: [
                'Помещения разных форматов',
                'Грузовой лифт',
                'Зона загрузки и разгрузки',
                'Отдельные входы',
                'Независимое отопление',
                'Охрана и видеонаблюдение',
                'Wi-Fi',
                'Возможность работы в ночное время'
            ]
        },
        finalCta: {
            title: 'Связаться по аренде',
            desc: 'Если вы рассматриваете аренду помещения в ТЦ MALIKA, свяжитесь с администрацией центра.',
            btnRoute: 'Построить маршрут',
            btnContact: 'Связаться с нами',
        },
        footer: {
            tagline: 'Товары для бизнеса, дома и автомобилей.',
            rights: 'Все права защищены.',
            privacy: 'Политика конфиденциальности',
        },
        map: {
            subtitle: 'Торговый центр MALIKA',
            title: 'Как нас найти',
            desc: 'Астана, Байконурский район, Проезд 69, 1А. Ориентир — трасса Алаш.',
            chooseNav: 'Построить маршрут',
            go: 'ПОЕХАЛИ',
        },
        contactPage: {
            title: 'Контакты',
            subtitle: 'Торговый центр MALIKA',
            desc: 'Астана, Байконурский район, Проезд 69, 1А. Ориентир — трасса Алаш.',
            heroSubtitle: 'Будем на связи',
            heroTitle: 'КОНТАКТЫ',
            heroDesc: 'Свяжитесь с нами удобным для вас способом.',
            addressTitle: 'Адрес',
            address1: 'Астана, Байконурский район, Проезд 69, 1А',
            emailTitle: 'Телефон',
            email1: '+7 (700) 305-35-36',
            email2: 'info@malika-center.kz',
        },
        rentPage: {
            heroTitle: 'Аренда помещений',
            heroDesc: 'ТЦ MALIKA предлагает помещения для магазинов, сервисных компаний и коммерческих проектов. Центр расположен в Байконурском районе с удобным подъездом и развитой инфраструктурой.',
            heroBtn: 'Оставить заявку',
            heroBtnSecondary: 'Позвонить в отдел аренды',
            status: 'Открыт прием заявок',
            statsUnits: 'Свободных мест',
            statsFormat: 'Удобные форматы',
            whyTitle: 'Преимущества для бизнеса',
            formatsTitle: 'Форматы помещений',
            infraTitle: 'Инфраструктура',
            termsTitle: 'Условия сотрудничества',

            whyReasons: [
                { title: 'Удобное расположение', desc: 'Расположение рядом с крупными транспортными магистралями и удобный подъезд для клиентов.' },
                { title: 'Парковка', desc: 'Просторная парковка на 50+ мест для посетителей и сотрудников центра.' },
                { title: 'Грузовой лифт', desc: 'Для удобной транспортировки товаров на этажи.' },
                { title: 'Зона разгрузки', desc: 'Специальная зона для приёма поставок и разгрузки товаров. Доступна техника для перемещения грузов.' }
            ],

            availableIntro: 'Мы предлагаем различные форматы коммерческих помещений.',
            availableTitle: 'Форматы помещений',
            availableSpaces: [
                { title: 'Торговые помещения', desc: 'Площади от 50 м². Помещения могут быть адаптированы под формат вашего бизнеса. При необходимости пространство делится перегородками.' },
                { title: 'Складские помещения', desc: 'Подходят для хранения товаров, запасов и логистики.' },
                { title: 'Коммерческие участки', desc: 'Помещения для сервисных компаний и обслуживания клиентов.' }
            ],
            infraItems: [
                { label: 'Парковка', value: 'Зона на 50+ мест' },
                { label: 'Грузовой лифт', value: 'Для габаритных грузов' },
                { label: 'Зона разгрузки', value: 'Удобный дебаркадер' },
                { label: 'Связь', value: 'Высокоскоростной Wi-Fi' }
            ],
            termItems: [
                { label: 'Минимальный срок аренды', value: 'от 11 месяцев' },
                { label: 'Депозит', value: '1 месяц' },
                { label: 'Арендные каникулы', value: 'Индивидуально' },
                { label: 'Планировка', value: 'Возможность разделения площади' }
            ],
            targetTitle: 'Кому подойдут помещения',
            targetDesc: 'Помещения торгового центра MALIKA подходят для разных форматов бизнеса:',
            targetItems: [
                { title: 'Магазины и торговые точки', desc: 'Автотовары, товары для дома, специализированная торговля.' },
                { title: 'Сервисные компании', desc: 'Ремонт, обслуживание, услуги.' },
                { title: 'Складские и логистические форматы', desc: 'Помещения для хранения и работы с товарами.' }
            ],
            processTitle: 'Как стать арендатором',
            processSteps: [
                { title: 'Заявка', desc: 'Оставьте заявку на сайте или свяжитесь с нами.' },
                { title: 'Просмотр', desc: 'Мы организуем просмотр подходящих помещений.' },
                { title: 'Договор', desc: 'Подписываем договор и готовим помещение к работе.' }
            ],
            formTitle: 'Интересует аренда?',
            formDesc: 'Оставьте заявку, и мы свяжемся с вами для обсуждения условий.'
        },
        rentHero: {
            title: 'Аренда помещений в ТЦ MALIKA',
            subtitle: 'Для магазинов, автотоваров и сервисов',
            mainTitle: 'Пространство для вашего бизнеса',
            mainDesc: 'Торговый центр MALIKA объединяет магазины, автотовары, сервисы и реабилитационный центр. Помещения подходят для розничной торговли, услуг и складских форматов.',
            btn: 'Оставить заявку',
            btnCTA: 'Оставить заявку',
            btnCall: 'Позвонить',
            btnDownload: 'Презентация (PDF)'
        },
        rehabPage: {
            heroTitle: 'Профессиональная реабилитация',
            heroDesc: 'Специализированный центр восстановления здоровья, расположенный в комфортной инфраструктуре ТЦ MALIKA. Инновационные методы и заботливый подход к каждому пациенту.',
            heroSubtitle: 'Забота о вашем здоровье',
            heroBtn: 'Записаться на прием',
            heroBtnSecondary: 'Прайс-лист',
            aboutTitle: 'О центре',
            aboutDesc: 'Центр реабилитации в MALIKA — это современное пространство, ориентированное на восстановление двигательной активности и качества жизни. Мы сочетаем доказательную медицину и персональный подход.',

            directionsTitle: 'Направления работы и услуги',
            directionsDocs: [
                'Физическая реабилитация',
                'Восстановление после травм и операций',
                'Консультации профильных специалистов',
                'Кинезиотерапия и ЛФК',
            ],

            specialistsTitle: 'Наши специалисты',
            specialists: [
                { name: 'Марат Ахметов', role: 'Главный врач, реабилитолог' },
                { name: 'Елена Соколова', role: 'Специалист по ЛФК' },
                { name: 'Арман Ибраев', role: 'Мануальный терапевт' },
            ],

            methodsTitle: 'Методики восстановления',
            methods: [
                { title: 'Кинезиотерапия', desc: 'Лечение движением для восстановления функций суставов.' },
                { title: 'Мануальная терапия', desc: 'Ручные техники для снятия боли и коррекции осанки.' },
                { title: 'Физиолечение', desc: 'Использование современного оборудования для ускорения регенерации.' }
            ],

            contactsTitle: 'Контактная информация',
            phone: 'Телефон: +7 (700) 305-35-36',
            address: 'Адрес: Внутри ТЦ MALIKA, 2 этаж',

            scheduleTitle: 'График приёма',
            scheduleDocs: [
                'Пн–Пт: 09:00 — 18:00',
                'Сб: 10:00 — 15:00',
                'Вс: Выходной'
            ],
            ctaTitle: 'Как записаться',
            ctaDesc: 'Оставьте заявку или позвоните нам для первичной консультации и составления плана реабилитации.'
        },
        directionsPage: {
            heroTitle: 'Магазины и сервисы MALIKA',
            heroDesc: 'Автозапчасти, оборудование, товары для дома, бытовые услуги и медицинский центр — всё в одном месте.',
        },
        rentContact: {
            title: 'Готовы обсудить аренду?',
            text: 'Свяжитесь с администрацией напрямую — ответим на все вопросы, покажем помещения и расскажем об условиях.',
            waBtn: 'Написать в WhatsApp',
            callBtn: 'Позвонить',
            waMessage: 'Здравствуйте! Интересует аренда помещения в ТЦ MALIKA.',
            hint: 'Администрация на связи ежедневно с 09:00 до 18:00',
        }
    },
    en: {
        common: {
            address: 'Astana, Alash Highway',
            orientir: 'Landmark: along Alash Highway',
            hours: 'Daily 09:00 — 18:00',
            route: 'Get Directions',
            home: 'Home',
            directions: 'Shops & Services',
            directionsShort: 'Catalog',
            rehab: 'Rehabilitation',
            aboutCenter: 'About Center',
            rent: 'For Tenants',
            contacts: 'Contacts',
            becomeTenant: 'Become a Tenant',
            more: 'More',
            company: 'MALIKA Trading Center',
            footerDesc: 'Shopping center in Astana',
            footerAddress: 'Astana, Baikonyr District, Proyezd 69, 1A',
            footerPhone: 'Phone: +7 (700) 305-35-36',
            footerHours: 'Working Hours: Daily, 09:00 — 18:00',
            nav: 'Navigation',
            rights: '© 2024 MALIKA. All rights reserved.',
            call: 'Call Us',
            instagram: 'https://www.instagram.com/malika_astana/',
            whatsapp: 'https://wa.me/77003053536',
        },
        hero: {
            welcome: 'Welcome',
            in: 'to',
            malika: 'MALIKA',
            title1: 'MALIKA Trading Center',
            title2: 'Promising New Location',
            desc: 'Goods for business, home, and cars, services, and a medical center in one place. Convenient location near Alash highway and quick access from different city districts.',
            about: 'About Center',
            scroll: 'Scroll Down',
            btnPrimary: 'View Shops',
            btnSecondary: 'Rental Spaces',
        },
        about: {
            title: 'MALIKA Shopping Center',
            text: 'MALIKA is a shopping center in the Baikonyr district of Astana. It houses auto parts stores, household goods, business equipment, service companies, and a medical rehabilitation center. The center is oriented toward the everyday tasks of business and local residents.',
            shortText: 'A shopping center in the Baikonyr district of Astana. Auto parts, equipment, household goods, services, and a medical center — all in one place.',
            moreBtn: 'More about the center',
            heroSubtitle: 'Learn more',
            heroTitle: 'ABOUT CENTER',
            heroDesc: 'MALIKA Shopping Center — a practical space for shopping, business, and everyday solutions in Astana.',
            stats: {
                area: '4000 m²',
                floors: '3 floors',
                parking: 'parking for 50+ spots'
            }
        },
        advantages: {
            title: 'A Convenient Place for Shopping and Business',
            subtitle: 'A place where it is convenient to handle matters: from home purchases to auto services.',
            items: [
                { title: 'Convenient Access', desc: 'The center is located near the Alash highway with easy entry.', color: '#fef5e7' },
                { title: 'Parking', desc: 'On-site parking is provided for visitors.', color: '#e6f2ed' },
                { title: 'Compact Format', desc: 'All shops and services are located nearby, allowing you to quickly solve necessary tasks.', color: '#e2e8f0' },
                { title: 'Security', desc: 'The territory is under security and video surveillance.', color: '#e0f2fe' },
                { title: 'Business Comfort', desc: 'Engineering communications and infrastructure allow for comfortable and stable work.', color: '#f3f4f6' }
            ]
        },
        directions: {
            title: 'Shops and Services',
            subtitle: 'Different categories of goods and services are presented in MALIKA.',
            all: 'All Categories',
            categories: [
                { title: 'Auto Goods', desc: 'Spare parts, tools, and accessories for cars.' },
                { title: 'Equipment & Tech', desc: 'Professional equipment and machinery.' },
                { title: 'Home Goods', desc: 'Everything you need for home and renovation.' },
                { title: 'Services', desc: 'Repair, maintenance, and professional services.' },
                { title: 'Medicine', desc: 'Modern rehabilitation and health recovery center.' }
            ]
        },
        rehab: {
            title: 'Medical Center',
            subtitle: 'Rehabilitation center offering health recovery programs.',
            desc: 'The MALIKA shopping center houses a modern rehabilitation center providing qualified care and support for health recovery.',
            features: [
                'Qualified specialists',
                'Modern equipment',
                'Individual approach',
                'Comfortable environment',
            ],
            btn: 'Learn more about center',
        },
        spaceShowcase: {
            title: 'MALIKA Prospects',
            subtitle: 'Center Development',
            desc: 'The shopping center continues to evolve. On the complex territory: about 3 hectares of free land, a new building is already under construction, development of warehouse and retail premises is planned, and further expansion of the complex is being considered.',
            extra: 'The development of the center creates additional opportunities for tenants and increases the flow of visitors.'
        },
        rent: {
            title: 'For Tenants',
            subtitle: 'Business Premises in MALIKA Shopping Center',
            desc: 'The shopping center offers premises for shops, service companies, and commercial projects. The center administration is open to cooperation and ready to discuss rental terms.',
            btn: 'Become a Tenant',
        },
        visit: {
            title: 'MALIKA TC',
            subtitle: 'Astana, Baikonyr District, Proyezd 69, 1A. Landmark — Alash Highway',
            allContacts: 'All Contacts',
            addressLabel: 'Center Address',
            addressVal: 'Proyezd 69, 1A (Alash Highway)',
            phoneLabel: 'Phone',
            phoneVal: '+7 (700) 305-35-36',
            hoursLabel: 'Working Hours',
            hoursVal: '09:00 — 18:00 daily',
        },
        contactInfo: {
            addressTitle: 'Address',
            phoneTitle: 'Phone',
            hoursTitle: 'Working hours',
            hoursDaily: '09:00 — 18:00 daily',
        },
        softTenant: {
            badge: 'For Tenants',
            titlePart1: 'Business Premises at',
            text: 'The shopping center offers premises for shops, service companies, and commercial projects.',
            btn: 'Become a Tenant',
            infraTitle: 'A convenient infrastructure is provided for tenants:',
            infraItems: [
                'Premises of different formats',
                'Cargo lift',
                'Loading and unloading zone',
                'Separate entrances',
                'Independent heating',
                'Security and video surveillance',
                'Wi-Fi',
                'Ability to work at night'
            ]
        },
        finalCta: {
            title: 'Contact for Rental',
            desc: 'If you are considering renting a space at MALIKA shopping center, contact the center administration.',
            btnRoute: 'Get Directions',
            btnContact: 'Contact Us',
        },
        footer: {
            tagline: 'Goods for business, home, and cars.',
            rights: 'All rights reserved.',
            privacy: 'Privacy Policy',
        },
        map: {
            subtitle: 'MALIKA Shopping Center',
            title: 'How to Find Us',
            desc: 'Astana, Baikonyr District, Proyezd 69, 1A. Landmark — Alash Highway.',
            chooseNav: 'Get Directions',
            go: 'LET\'S GO',
        },
        contactPage: {
            title: 'Contacts',
            subtitle: 'MALIKA Shopping Center',
            desc: 'Astana, Baikonyr District, Proyezd 69, 1A. Landmark — Alash Highway.',
            heroSubtitle: 'Stay in touch',
            heroTitle: 'CONTACTS',
            heroDesc: 'Contact us in a way that is convenient for you.',
            addressTitle: 'Address',
            address1: 'Astana, Baikonyr District, Proyezd 69, 1A',
            emailTitle: 'Phone',
            email1: '+7 (700) 305-35-36',
            email2: 'info@malika-center.kz',
        },
        rentPage: {
            heroTitle: 'Rental of Premises',
            heroDesc: 'MALIKA Shopping Center offers premises for shops, service companies, and commercial projects. The center is located in the Baikonyr district with convenient access and developed infrastructure.',
            heroBtn: 'Submit Inquiry',
            heroBtnSecondary: 'Call leasing department',
            status: 'Accepting applications',
            statsUnits: 'Available spaces',
            statsFormat: 'Convenient formats',
            whyTitle: 'Business Advantages',
            formatsTitle: 'Room Formats',
            infraTitle: 'Infrastructure',
            termsTitle: 'Terms of Cooperation',

            whyReasons: [
                { title: 'Convenient Location', desc: 'Located near major highways with easy access for clients.' },
                { title: 'Parking', desc: 'Spacious parking area with 50+ spots for visitors and employees.' },
                { title: 'Cargo Lift', desc: 'For convenient transportation of goods to the floors.' },
                { title: 'Loading Zone', desc: 'Dedicated area for receiving deliveries and unloading goods. Equipment available for moving cargo.' }
            ],

            availableIntro: 'We offer various formats of commercial premises.',
            availableTitle: 'Commercial Space Formats',
            availableSpaces: [
                { title: 'Retail Spaces', desc: 'From 50 m². Space can be adapted to your business format — partitions available if needed.' },
                { title: 'Warehouse Areas', desc: 'For storing goods, inventory, and logistics.' },
                { title: 'Commercial Spaces', desc: 'Premises for service companies and client-facing businesses.' }
            ],
            infraItems: [
                { label: 'Parking', value: '50+ spots area' },
                { label: 'Cargo Lift', value: 'For bulky goods' },
                { label: 'Loading Zone', value: 'Convenient dock' },
                { label: 'Internet', value: 'High-speed Wi-Fi' }
            ],
            termItems: [
                { label: 'Minimum lease term', value: 'from 11 months' },
                { label: 'Deposit', value: '1 month' },
                { label: 'Rent-free period', value: 'Individual' },
                { label: 'Layout', value: 'Flexible space configuration' }
            ],
            targetTitle: 'Who are the spaces for',
            targetDesc: 'MALIKA Shopping Center premises suit various business formats:',
            targetItems: [
                { title: 'Shops & retail', desc: 'Auto goods, home goods, specialized retail.' },
                { title: 'Service companies', desc: 'Repair, maintenance, and services.' },
                { title: 'Warehouse & logistics', desc: 'Storage and goods handling.' }
            ],
            processTitle: 'How to become a tenant',
            processSteps: [
                { title: 'Inquiry', desc: 'Leave a request on the website or contact us directly.' },
                { title: 'Viewing', desc: 'We will arrange a viewing of suitable spaces.' },
                { title: 'Agreement', desc: 'Sign the contract and prepare the space for work.' }
            ],
            formTitle: 'Interested in rental?',
            formDesc: 'Leave a request, and we will contact you to discuss the terms.'
        },
        rentHero: {
            title: 'Rental at MALIKA Shopping Center',
            subtitle: 'For shops, auto goods, and services',
            mainTitle: 'Space for your business',
            mainDesc: 'MALIKA Shopping Center houses shops, auto goods, services, and a rehabilitation center. Premises are suitable for retail, services, and warehouse formats.',
            btn: 'Submit Application',
            btnCTA: 'Submit Application',
            btnCall: 'Call',
            btnDownload: 'Presentation (PDF)'
        },
        rehabPage: {
            heroTitle: 'Professional Rehabilitation',
            heroDesc: 'A specialized health recovery center located within the comfortable infrastructure of the MALIKA shopping center. Innovative methods and a caring approach to every patient.',
            heroSubtitle: 'Care for your health',
            heroBtn: 'Book an Appointment',
            heroBtnSecondary: 'Price List',
            aboutTitle: 'About Center',
            aboutDesc: 'The rehabilitation center at MALIKA is a modern space focused on restoring mobility and quality of life. We combine evidence-based medicine and a personal approach.',

            directionsTitle: 'Areas of Work and Services',
            directionsDocs: [
                'Physical rehabilitation',
                'Recovery after injuries and surgeries',
                'Consultations with profile specialists',
                'Kinesitherapy and exercise therapy',
            ],

            specialistsTitle: 'Our Specialists',
            specialists: [
                { name: 'Marat Akhmetov', role: 'Head Physician, Rehabilitation Specialist' },
                { name: 'Elena Sokolova', role: 'Physiotherapist' },
                { name: 'Arman Ibrayev', role: 'Manual Therapist' },
            ],

            methodsTitle: 'Recovery Methods',
            methods: [
                { title: 'Kinesitherapy', desc: 'Movement therapy to restore joint function.' },
                { title: 'Manual Therapy', desc: 'Hands-on techniques for pain relief and posture correction.' },
                { title: 'Physiotherapy', desc: 'Using modern equipment to accelerate regeneration.' }
            ],

            contactsTitle: 'Contact Information',
            phone: 'Phone: +7 (700) 305-35-36',
            address: 'Address: Inside MALIKA Mall, 2nd floor',

            scheduleTitle: 'Reception Schedule',
            scheduleDocs: [
                'Mon–Fri: 09:00 — 18:00',
                'Sat: 10:00 — 15:00',
                'Sun: Closed'
            ],
            ctaTitle: 'How to register',
            ctaDesc: 'Leave a request or call us for an initial consultation and creation of a rehabilitation plan.'
        },
        directionsPage: {
            heroTitle: 'Shops & Services at MALIKA',
            heroDesc: 'Auto parts, equipment, home goods, household services, and a medical center — all in one place.',
        },
        rentContact: {
            title: 'Ready to discuss rental?',
            text: 'Contact the administration directly — we will answer all questions, show available spaces, and explain the terms.',
            waBtn: 'Message on WhatsApp',
            callBtn: 'Call Us',
            waMessage: 'Hello! I am interested in renting a space at MALIKA shopping center.',
            hint: 'Administration is available daily from 09:00 to 18:00',
        }
    }
};

export type TranslationKeys = typeof translations.ru;
