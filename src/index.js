import "./index.css"

const dataApplicant = {
    "first_name": "Петров",
    "last_name": "Иван",
    "middle_name": "Иванович",
    "photo": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD//gA7Q1JFQVRPUjog",
    "lead_type": "cold",
    "birthday": "1988-12-22",
    "phone": "+7 (911) 1112233",
    "email": "example@mail.com",
    "tg": "tg_login",
    "skype": "skype_login",
    "contacts": [
      {
        "contact_type": "phone",
        "value": "8922704111124",
        "is_prefered": true
      },
      {
        "contact_type": "email",
        "value": "eee@mail.ru",
        "is_prefered": false
      }
    ],
    "money": "100 000",
    "currency": "RUR",
    "about_me": "Однажды в студеную зимнюю пору я из лесу вышел был сильный мороз... Некрасов",
    "country": 2287,
    "gender": "male",
    "citizenship": [
      "Россия"
    ],
    "total_experience": 60,
    "experience": [
      {
        "position": "Frontend - Astronaut",
        "company": "SpaceX",
        "link": "https://...",
        "date_start": "2020-02-14",
        "date_end": "2022-02-14",
        "is_now": true,
        "description": "Описание работы",
        "country": 2287,
        "skills": [
          "SQL"
        ]
      }
    ],
    "employments": [
      1,
      2,
      3
    ],
    "education": [
      {
        "level": "Высшее",
        "country": 2287,
        "education_type": "main",
        "form": "Заочная",
        "name": "Хогвардс",
        "date_start": "2020-02-14",
        "date_end": "2020-02-14",
        "speciality": "Frontend - Wizard",
        "description": "Чем занимался что изучил",
        "link": "https://..."
      }
    ],
    "skills": [
      "SQL",
      "React"
    ],
    "text_block": "Comment about applicant",
    "position": "Ruby on Rails разработчик",
    "company": "Decart IT",
    "comment": {
      "description": "Добавление кандидата"
    },
    "admin_user_id": 41,
    "account_source_id": "id источника добавления. Можно получить из запроса: /api/account_sources",
    "unidentified_info": "Неопознанная информация, для редактирования рекрутеру.",
    "languages": [
      {
        "language_id": 5,
        "language_level_id": 2
      },
      {
        "language_id": 8,
        "language_level_id": 3
      }
    ],
    "has_vehicle": false,
    "driver_licenses": [
      {
        "driver_license_id": 5,
        "driver_experience": 80
      },
      {
        "driver_license_id": 4,
        "driver_experience": 30
      }
    ]
  }

const dataApplicant2 = {
    first_name: "Иван",
    last_name: "Иван",
    middle_name: "Иванович",
    photo: "",
    lead_type: "cold",
    birthday: "1988-12-22",
    phone: "+7 (987) 6543210",
    email: "ivangeliumsan@yandex.ru",
    tg: "tg_login",
    skype: "skype_login",
    contacts: [
      {
        contact_type: "phone",
        value: "89876543210",
        is_prefered: true
      },
      {
        contact_type: "email",
        value: "ivangeliumsan@yandex.ru",
        is_prefered: false
      }
    ],
    money: "100 000",
    currency: "RUR",
    about_me: "Автоматически сгенерированный кандидат",
    country: 2287,
    gender: "male",
    citizenship: [
      "Россия"
    ],
    total_experience: 60,
    experience: [
      {
        position: "Frontend - Astronaut",
        company: "SpaceX",
        link: "https://...",
        date_start: "2020-02-14",
        date_end: "2022-02-14",
        is_now: true,
        description: "Описание работы",
        country: 2287,
        skills: [
          "SQL"
        ]
      }
    ],
    employments: [
      1,
      2,
      3
    ],
    ducation: [
      {
        level: "Высшее",
        country: 2287,
        education_type: "main",
        form: "Заочная",
        name: "Хогвардс",
        date_start: "2020-02-14",
        date_end: "2020-02-14",
        speciality: "Frontend - Wizard",
        description: "Чем занимался что изучил",
        link: "https://..."
      }
    ],
    skills: [
      "SQL",
      "React"
    ],
    text_block: "Comment about applicant",
    position: "Ruby on Rails разработчик",
    company: "Decart IT",
    comment: {
      description: "Добавление кандидата"
    },
    admin_user_id: 41,
    account_source_id: "id источника добавления. Можно получить из запроса: /api/account_sources",
    unidentified_info: "Неопознанная информация, для редактирования рекрутеру.",
    languages: [
      {
        language_id: 5,
        language_level_id: 2
      },
      {
        language_id: 8,
        language_level_id: 3
      }
    ],
    has_vehicle: false,
    driver_licenses: [
      {
        driver_license_id: 5,
        driver_experience: 80
      },
      {
        driver_license_id: 4,
        driver_experience: 30
      }
    ]
  }


const professions = [
    "Врач", "Учитель", "Инженер", "Программист", "Бухгалтер", "Юрист", "Менеджер", "Повар", "Строитель", "Электрик",
    "Сантехник", "Водитель", "Полицейский", "Пожарный", "Военный", "Пилот", "Стюардесса", "Журналист", "Редактор", "Переводчик",
    "Дизайнер", "Художник", "Музыкант", "Актёр", "Режиссёр", "Фотограф", "Видеооператор", "Маркетолог", "PR-менеджер", "HR-менеджер",
    "Логист", "Экономист", "Финансист", "Аналитик", "Архитектор", "Геолог", "Эколог", "Биолог", "Химик", "Физик",
    "Математик", "Историк", "Философ", "Психолог", "Социолог", "Политолог", "Библиотекарь", "Архивариус", "Музейный работник", "Экскурсовод",
    "Тренер", "Спортсмен", "Массажист", "Косметолог", "Парикмахер", "Визажист", "Стилист", "Флорист", "Садовник", "Фермер",
    "Рыбак", "Охотник", "Лесник", "Шахтёр", "Металлург", "Токарь", "Сварщик", "Слесарь", "Механик", "Инженер-технолог",
    "Инженер-конструктор", "Инженер-электронщик", "Инженер-программист", "Системный администратор", "Тестировщик", "Веб-разработчик", "Мобильный разработчик", "Data Scientist", "Аналитик данных", "SEO-специалист",
    "Контент-менеджер", "Копирайтер", "Рерайтер", "Блогер", "Влогер", "Подкастер", "Стример", "Игрок в киберспорт", "Оператор call-центра", "Курьер",
    "Почтальон", "Продавец", "Кассир", "Торговый представитель", "Мерчендайзер", "Супервайзер", "Директор", "Заместитель директора", "Генеральный директор", "Предприниматель"
];

const maleNames = [
    "Александр", "Дмитрий", "Максим", "Сергей", "Андрей", "Алексей", "Артём", "Илья", "Кирилл", "Михаил",
    "Никита", "Матвей", "Роман", "Егор", "Арсений", "Иван", "Денис", "Евгений", "Даниил", "Тимофей",
    "Владислав", "Игорь", "Владимир", "Павел", "Руслан", "Марк", "Константин", "Тимур", "Олег", "Ярослав",
    "Антон", "Николай", "Глеб", "Данил", "Савелий", "Вадим", "Степан", "Юрий", "Богдан", "Гордей",
    "Артемий", "Эдуард", "Марсель", "Валерий", "Леонид", "Семён", "Фёдор", "Георгий", "Лев", "Виктор",
    "Елисей", "Виталий", "Вячеслав", "Захар", "Мирон", "Дамир", "Григорий", "Родион", "Валентин", "Платон",
    "Серафим", "Аркадий", "Борис", "Демид", "Эрик", "Игнат", "Лука", "Марат", "Пётр", "Савва",
    "Ян", "Оскар", "Тарас", "Артур", "Филипп", "Клим", "Демьян", "Альберт", "Ринат", "Роберт",
    "Святослав", "Прохор", "Нестор", "Станислав", "Анатолий", "Рафаэль", "Гарри", "Геннадий", "Иосиф", "Всеволод"
];

const maleSurnames = [
    "Иванов", "Смирнов", "Кузнецов", "Попов", "Васильев", "Петров", "Соколов", "Михайлов", "Новиков", "Фёдоров",
    "Морозов", "Волков", "Алексеев", "Лебедев", "Семёнов", "Егоров", "Павлов", "Козлов", "Степанов", "Николаев",
    "Орлов", "Андреев", "Макаров", "Никитин", "Захаров", "Зайцев", "Соловьёв", "Борисов", "Яковлев", "Григорьев",
    "Романов", "Воробьёв", "Сергеев", "Кузьмин", "Фролов", "Александров", "Дмитриев", "Королёв", "Гусев", "Киселёв",
    "Ильин", "Максимов", "Поляков", "Сорокин", "Виноградов", "Ковалёв", "Белов", "Медведев", "Антонов", "Тарасов",
    "Жуков", "Баранов", "Филиппов", "Комаров", "Давыдов", "Беляев", "Герасимов", "Богданов", "Осипов", "Сидоров",
    "Матвеев", "Титов", "Марков", "Миронов", "Крылов", "Куликов", "Карпов", "Власов", "Мельников", "Денисов",
    "Гаврилов", "Тихонов", "Казаков", "Афанасьев", "Данилов", "Савельев", "Тимофеев", "Фомин", "Чернов", "Абрамов",
    "Мартынов", "Ефимов", "Щербаков", "Назаров", "Калинин", "Исаев", "Чернышёв", "Быков", "Маслов", "Родионов"
];

const malePatronymics = maleNames.map(name => name + "ович");

const femaleNames = [
    "Анастасия", "Мария", "Анна", "Виктория", "Екатерина", "Наталья", "Марина", "Полина", "Дарья", "Алина",
    "Ксения", "Елена", "Ольга", "Татьяна", "Юлия", "Ирина", "Евгения", "Светлана", "Валерия", "Вероника",
    "Александра", "Ульяна", "Кристина", "София", "Диана", "Арина", "Ангелина", "Людмила", "Любовь", "Яна",
    "Маргарита", "Василиса", "Галина", "Елизавета", "Злата", "Инна", "Карина", "Лилия", "Милана", "Надежда",
    "Олеся", "Регина", "Снежана", "Таисия", "Элина", "Ярослава", "Алёна", "Амалия", "Анфиса", "Валентина",
    "Варвара", "Вера", "Глафира", "Дина", "Евдокия", "Жанна", "Зоя", "Инесса", "Камилла", "Лариса",
    "Леся", "Лиана", "Лидия", "Майя", "Марта", "Мелания", "Наталия", "Нелли", "Ника", "Нина",
    "Оксана", "Раиса", "Римма", "Роза", "Сабина", "Стелла", "Сюзанна", "Тамара", "Устинья", "Фаина",
    "Эвелина", "Эльвира", "Эмма", "Юлиана", "Ядвига", "Ясмина", "Агата", "Аглая", "Азалия", "Аксинья"
];

const femaleSurnames = maleSurnames.map(surname => surname + (surname.endsWith('ий') ? 'я' : 'а'));

const femalePatronymics = maleNames.map(name => name + "овна");


let data = {
    email:"ivangeliumsan@yandex.ru",
    password:"20071998Leo!",
    source:"plugin"
}

async function  login (login = "ivangeliumsan@yandex.ru",password = "20071998Leo!",logUrl = "https://huntlee.ru/api/auth/login") {
    const data = {
        email: login,
        password: password,
        source:"plugin"
    }
    await fetch (logUrl, {
        method: "POST",
        headers: {
            "accept":"*/*",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json()) // Преобразуем ответ в JSON
    .then(result => {
    //   console.log('Успех:', result.message.auth_token); // Обрабатываем успешный ответ
      return result.message.auth_token
    })
    .catch(error => {
      console.error('Ошибка:', error); // Обрабатываем ошибку
      return error
    });
}





async function postApplicant() {
    const data = generateApplicant(dataApplicant)
    const link = "https://huntlee.ru/api/applicants"
    console.log(JSON.stringify(data))
    await fetch (link, {
        method: "POST",
        headers: {
            "accept":"*/*",
            "X-DCRT-HRM-AUTH": "    ",
            "Content-Type":"application/json"
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json()) // Преобразуем ответ в JSON
    .then(result => {
      console.log('Успех:', result); // Обрабатываем успешный ответ
      return result
    })
    .catch(error => {
      console.error('Ошибка:', error); // Обрабатываем ошибку
      return error
    });
}





function rnd () {
    return Math.floor(Math.random() *100) - 1
}

function generateApplicant (ap) {
    if (rnd()>50) {
        ap.gender = "male";
        ap.first_name = maleNames[rnd()]
        ap.last_name = maleSurnames[rnd()]
        ap.middle_name = malePatronymics[rnd()]
    }
    else {
        ap.gender = "female";
        ap.first_name = femaleNames[rnd()]
        ap.last_name = femaleSurnames[rnd()]
        ap.middle_name = femalePatronymics[rnd()]
    }
    ap.position = professions[rnd()]
    return ap
}


const auth_token = login()
console.log(postApplicant())
