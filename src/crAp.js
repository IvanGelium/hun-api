const vars = require('./base64')
const bg = require('./index')
export { initUi }

let logForm = ''
let meCont = ''
let createForm = ''
let stage = false
const stageString = 'stage.'
let HasTag = false
let photos = false
let vac = ''
let stat = ''

const initUi = () => {
    if (bg.bg.lastElementChild.className !== 'heheader') {
        while (bg.bg.lastElementChild.className !== 'heheader') {
            bg.bg.lastElementChild.remove()
        }
    }
    bg.crAp.style.opacity = '100%'
    bg.crUs.style.opacity = '50%'

    const header = document.createElement('div')
    header.className = 'header'
    const logContainer = document.createElement('div')
    logContainer.className = 'logContainer masscont'
    logForm = document.createElement('form')
    logForm.action = 'submit'
    logForm.className = 'logForm input-cont'
    const logContainerEmail = document.createElement('div')
    logContainerEmail.className = 'email-container input-cont'
    const logLabelEmail = document.createElement('label')
    logLabelEmail.setAttribute('for', 'email')
    logLabelEmail.textContent = 'Логин'
    const logInputEmail = document.createElement('input')
    logInputEmail.setAttribute('type', 'email')
    logInputEmail.setAttribute('name', 'email')
    logInputEmail.id = 'email'
    logInputEmail.placeholder = 'addres@domen.domen'

    const logContainerPass = document.createElement('div')
    logContainerPass.classList = 'pass-container input-cont'
    const logLabelPass = document.createElement('label')
    logLabelPass.setAttribute('for', 'pass')
    logLabelPass.textContent = 'Пароль'
    logLabelPass.id = 'pass'
    const logInputPass = document.createElement('input')
    logInputPass.setAttribute('type', 'password')
    logInputPass.setAttribute('name', 'pass')
    logInputPass.id = 'pass'
    logInputPass.placeholder = 'qwerty123'

    const lastRowCont = document.createElement('div')
    lastRowCont.className = 'lrCont'

    const stageAskCont = document.createElement('div')
    stageAskCont.className = 'stageCont checkboxCont input-cont'
    const stageAskLabel = document.createElement('label')
    stageAskLabel.textContent = 'Stage:'
    const stageAskInput = document.createElement('input')
    stageAskInput.setAttribute('type', 'checkbox')
    stageAskInput.setAttribute('name', 'stageCheck')
    stageAskInput.id = 'stageCheck'
    stageAskInput.className = 'checkbox'

    const logContainerBtn = document.createElement('div')
    logContainerBtn.className = 'btn-container input-cont'
    const logInputBtn = document.createElement('input')
    logInputBtn.className = 'btn'
    logInputBtn.type = 'submit'
    logInputBtn.value = 'log-int'

    bg.bg.appendChild(header)

    header.appendChild(logContainer)
    logContainer.appendChild(logForm)
    logForm.appendChild(logContainerEmail)
    logContainerEmail.appendChild(logLabelEmail)
    logContainerEmail.appendChild(logInputEmail)

    logForm.appendChild(logContainerPass)
    logContainerPass.appendChild(logLabelPass)
    logContainerPass.appendChild(logInputPass)

    logForm.appendChild(lastRowCont)

    lastRowCont.appendChild(stageAskCont)
    stageAskCont.appendChild(stageAskLabel)
    stageAskCont.appendChild(stageAskInput)

    lastRowCont.appendChild(logContainerBtn)
    logContainerBtn.appendChild(logInputBtn)

    const crApUi = document.createElement('div')
    crApUi.className = 'applicant-gen masscont'
    const genForm = document.createElement('form')
    genForm.className = 'gen-form input-cont'
    const numbCont = document.createElement('div')
    numbCont.className = 'number-cont input-cont'

    const genLabelNumb = document.createElement('label')
    genLabelNumb.textContent = 'Сколько кандидатов?'
    const genInputNumb = document.createElement('input')
    genInputNumb.setAttribute('type', 'number')
    genInputNumb.setAttribute('name', 'numb')
    genInputNumb.id = 'num'
    genInputNumb.placeholder = '1 - 100'

    const vacFieldCont = document.createElement('div')
    vacFieldCont.className = 'input-cont'
    const vacFieldLabel = document.createElement('label')
    vacFieldLabel.textContent = 'Введите ID вакансии:'
    const vacFieldInput = document.createElement('input')
    vacFieldInput.setAttribute('type', 'number')
    vacFieldInput.setAttribute('name', 'vacId')
    vacFieldInput.id = 'vacId'
    vacFieldInput.placeholder = 'Не обязательно'

    const statusFieldCont = document.createElement('div')
    statusFieldCont.className = 'input-cont'
    const statusFieldLabel = document.createElement('label')
    statusFieldLabel.textContent = 'Введите ID этапа:'
    const statusFieldInput = document.createElement('input')
    statusFieldInput.setAttribute('type', 'number')
    statusFieldInput.setAttribute('name', 'statId')
    statusFieldInput.id = 'statId'
    statusFieldInput.placeholder = 'Не обязательно'

    const anotherLastRow = document.createElement('div')
    anotherLastRow.className = 'lrCont input-cont'

    const weightCont = document.createElement('div')
    weightCont.classList = 'checkboxCont'

    const weightLabel = document.createElement('label')
    weightLabel.textContent = 'С фото:'

    const weightInput = document.createElement('input')
    weightInput.setAttribute('type', 'checkbox')
    weightInput.setAttribute('name', 'PhotoCheck')
    weightInput.id = 'PhotoCheck'
    weightInput.className = 'checkbox'

    const nubBtnCont = document.createElement('div')
    nubBtnCont.className = 'nubBtnCont input-cont'
    const genInputBtn = document.createElement('input')
    genInputBtn.className = 'btn'
    genInputBtn.type = 'submit'
    genInputBtn.value = ' Создать'

    header.appendChild(crApUi)
    crApUi.appendChild(genForm)
    genForm.appendChild(numbCont)
    numbCont.appendChild(genLabelNumb)
    numbCont.appendChild(genInputNumb)

    genForm.appendChild(vacFieldCont)
    vacFieldCont.appendChild(vacFieldLabel)
    vacFieldCont.appendChild(vacFieldInput)

    genForm.appendChild(statusFieldCont)
    statusFieldCont.appendChild(statusFieldLabel)
    statusFieldCont.appendChild(statusFieldInput)

    genForm.appendChild(anotherLastRow)

    anotherLastRow.appendChild(weightCont)
    weightCont.appendChild(weightLabel)
    weightCont.appendChild(weightInput)

    anotherLastRow.appendChild(nubBtnCont)
    nubBtnCont.appendChild(genInputBtn)

    const meContainer = document.createElement('div')
    meContainer.className = 'me-container masscont'
    const infoMe = document.createElement('div')
    infoMe.className = 'infoMe'
    infoMe.textContent = 'Вы не авторизовались'

    header.appendChild(meContainer)
    meContainer.appendChild(infoMe)

    logInputBtn.addEventListener('click', (e) => {
        e.preventDefault()
        getLog(e)
    })

    genInputBtn.addEventListener('click', (e) => {
        e.preventDefault()
        getCreate(e)
    })
    meCont = document.querySelector('.me-container')
    createForm = document.querySelector('.gen-form')
}

//#region variables

const dataApplicant = {
    first_name: 'Петров',
    last_name: 'Иван',
    middle_name: 'Иванович',
    lead_type: 'cold',
    birthday: '1988-12-22',
    phone: '+7 (911) 1112233',
    email: 'example@mail.com',
    tg: 'tg_login',
    skype: 'skype_login',
    contacts: [
        {
            contact_type: 'phone',
            value: '8922704111124',
            is_prefered: true,
        },
        {
            contact_type: 'email',
            value: 'eee@mail.ru',
            is_prefered: false,
        },
    ],
    money: '100 000',
    currency: 'RUR',
    about_me: 'Сгенерированный кандидат',
    country: 2287,
    gender: 'male',
    citizenship: ['Россия'],
    total_experience: 60,
    experience: [
        {
            position: 'Frontend - Astronaut',
            company: 'SpaceX',
            link: 'https://...',
            date_start: '2020-02-14',
            date_end: '2022-02-14',
            is_now: true,
            description: 'Описание работы',
            country: 2287,
            skills: ['SQL'],
        },
    ],
    employments: [1, 2, 3],
    education: [
        {
            level: 'Высшее',
            country: 2287,
            education_type: 'main',
            form: 'Заочная',
            name: 'Хогвардс',
            date_start: '2020-02-14',
            date_end: '2020-02-14',
            speciality: 'Frontend - Wizard',
            description: 'Чем занимался что изучил',
            link: 'https://...',
        },
    ],
    skills: ['SQL', 'React'],
    text_block: 'Comment about applicant',
    position: 'Ruby on Rails разработчик',
    company: 'Decart IT',
    comment: {
        description: 'Добавление кандидата',
    },
    admin_user_id: 41,
    account_source_id:
        'id источника добавления. Можно получить из запроса: /api/account_sources',
    unidentified_info: 'Неопознанная информация, для редактирования рекрутеру.',
    languages: [
        {
            language_id: 5,
            language_level_id: 2,
        },
        {
            language_id: 8,
            language_level_id: 3,
        },
    ],
    has_vehicle: false,
    driver_licenses: [
        {
            driver_license_id: 5,
            driver_experience: 80,
        },
        {
            driver_license_id: 4,
            driver_experience: 30,
        },
    ],
}

const professions = [
    'Врач',
    'Учитель',
    'Инженер',
    'Программист',
    'Бухгалтер',
    'Юрист',
    'Менеджер',
    'Повар',
    'Строитель',
    'Электрик',
    'Сантехник',
    'Водитель',
    'Полицейский',
    'Пожарный',
    'Военный',
    'Пилот',
    'Стюардесса',
    'Журналист',
    'Редактор',
    'Переводчик',
    'Дизайнер',
    'Художник',
    'Музыкант',
    'Актёр',
    'Режиссёр',
    'Фотограф',
    'Видеооператор',
    'Маркетолог',
    'PR-менеджер',
    'HR-менеджер',
    'Логист',
    'Экономист',
    'Финансист',
    'Аналитик',
    'Архитектор',
    'Геолог',
    'Эколог',
    'Биолог',
    'Химик',
    'Физик',
    'Математик',
    'Историк',
    'Философ',
    'Психолог',
    'Социолог',
    'Политолог',
    'Библиотекарь',
    'Архивариус',
    'Музейный работник',
    'Экскурсовод',
    'Тренер',
    'Спортсмен',
    'Массажист',
    'Косметолог',
    'Парикмахер',
    'Визажист',
    'Стилист',
    'Флорист',
    'Садовник',
    'Фермер',
    'Рыбак',
    'Охотник',
    'Лесник',
    'Шахтёр',
    'Металлург',
    'Токарь',
    'Сварщик',
    'Слесарь',
    'Механик',
    'Инженер-технолог',
    'Инженер-конструктор',
    'Инженер-электронщик',
    'Инженер-программист',
    'Системный администратор',
    'Тестировщик',
    'Веб-разработчик',
    'Мобильный разработчик',
    'Data Scientist',
    'Аналитик данных',
    'SEO-специалист',
    'Контент-менеджер',
    'Копирайтер',
    'Рерайтер',
    'Блогер',
    'Влогер',
    'Подкастер',
    'Стример',
    'Игрок в киберспорт',
    'Оператор call-центра',
    'Курьер',
    'Почтальон',
    'Продавец',
    'Кассир',
    'Торговый представитель',
    'Мерчендайзер',
    'Супервайзер',
    'Директор',
    'Заместитель директора',
    'Генеральный директор',
    'Предприниматель',
]

const maleNames = [
    'Александр',
    'Дмитрий',
    'Максим',
    'Сергей',
    'Андрей',
    'Алексей',
    'Артём',
    'Илья',
    'Кирилл',
    'Михаил',
    'Никита',
    'Матвей',
    'Роман',
    'Егор',
    'Арсений',
    'Иван',
    'Денис',
    'Евгений',
    'Даниил',
    'Тимофей',
    'Владислав',
    'Игорь',
    'Владимир',
    'Павел',
    'Руслан',
    'Марк',
    'Константин',
    'Тимур',
    'Олег',
    'Ярослав',
    'Антон',
    'Николай',
    'Глеб',
    'Данил',
    'Савелий',
    'Вадим',
    'Степан',
    'Юрий',
    'Богдан',
    'Гордей',
    'Артемий',
    'Эдуард',
    'Марсель',
    'Валерий',
    'Леонид',
    'Семён',
    'Фёдор',
    'Георгий',
    'Лев',
    'Виктор',
    'Елисей',
    'Виталий',
    'Вячеслав',
    'Захар',
    'Мирон',
    'Дамир',
    'Григорий',
    'Родион',
    'Валентин',
    'Платон',
    'Серафим',
    'Аркадий',
    'Борис',
    'Демид',
    'Эрик',
    'Игнат',
    'Лука',
    'Марат',
    'Пётр',
    'Савва',
    'Ян',
    'Оскар',
    'Тарас',
    'Артур',
    'Филипп',
    'Клим',
    'Демьян',
    'Альберт',
    'Ринат',
    'Роберт',
    'Святослав',
    'Прохор',
    'Нестор',
    'Станислав',
    'Анатолий',
    'Рафаэль',
    'Гарри',
    'Геннадий',
    'Иосиф',
    'Всеволод',
]

const maleSurnames = [
    'Иванов',
    'Смирнов',
    'Кузнецов',
    'Попов',
    'Васильев',
    'Петров',
    'Соколов',
    'Михайлов',
    'Новиков',
    'Фёдоров',
    'Морозов',
    'Волков',
    'Алексеев',
    'Лебедев',
    'Семёнов',
    'Егоров',
    'Павлов',
    'Козлов',
    'Степанов',
    'Николаев',
    'Орлов',
    'Андреев',
    'Макаров',
    'Никитин',
    'Захаров',
    'Зайцев',
    'Соловьёв',
    'Борисов',
    'Яковлев',
    'Григорьев',
    'Романов',
    'Воробьёв',
    'Сергеев',
    'Кузьмин',
    'Фролов',
    'Александров',
    'Дмитриев',
    'Королёв',
    'Гусев',
    'Киселёв',
    'Ильин',
    'Максимов',
    'Поляков',
    'Сорокин',
    'Виноградов',
    'Ковалёв',
    'Белов',
    'Медведев',
    'Антонов',
    'Тарасов',
    'Жуков',
    'Баранов',
    'Филиппов',
    'Комаров',
    'Давыдов',
    'Беляев',
    'Герасимов',
    'Богданов',
    'Осипов',
    'Сидоров',
    'Матвеев',
    'Титов',
    'Марков',
    'Миронов',
    'Крылов',
    'Куликов',
    'Карпов',
    'Власов',
    'Мельников',
    'Денисов',
    'Гаврилов',
    'Тихонов',
    'Казаков',
    'Афанасьев',
    'Данилов',
    'Савельев',
    'Тимофеев',
    'Фомин',
    'Чернов',
    'Абрамов',
    'Мартынов',
    'Ефимов',
    'Щербаков',
    'Назаров',
    'Калинин',
    'Исаев',
    'Чернышёв',
    'Быков',
    'Маслов',
    'Родионов',
]

const malePatronymics = maleNames.map((name) => name + 'ович')

const femaleNames = [
    'Анастасия',
    'Мария',
    'Анна',
    'Виктория',
    'Екатерина',
    'Наталья',
    'Марина',
    'Полина',
    'Дарья',
    'Алина',
    'Ксения',
    'Елена',
    'Ольга',
    'Татьяна',
    'Юлия',
    'Ирина',
    'Евгения',
    'Светлана',
    'Валерия',
    'Вероника',
    'Александра',
    'Ульяна',
    'Кристина',
    'София',
    'Диана',
    'Арина',
    'Ангелина',
    'Людмила',
    'Любовь',
    'Яна',
    'Маргарита',
    'Василиса',
    'Галина',
    'Елизавета',
    'Злата',
    'Инна',
    'Карина',
    'Лилия',
    'Милана',
    'Надежда',
    'Олеся',
    'Регина',
    'Снежана',
    'Таисия',
    'Элина',
    'Ярослава',
    'Алёна',
    'Амалия',
    'Анфиса',
    'Валентина',
    'Варвара',
    'Вера',
    'Глафира',
    'Дина',
    'Евдокия',
    'Жанна',
    'Зоя',
    'Инесса',
    'Камилла',
    'Лариса',
    'Леся',
    'Лиана',
    'Лидия',
    'Майя',
    'Марта',
    'Мелания',
    'Наталия',
    'Нелли',
    'Ника',
    'Нина',
    'Оксана',
    'Раиса',
    'Римма',
    'Роза',
    'Сабина',
    'Стелла',
    'Сюзанна',
    'Тамара',
    'Устинья',
    'Фаина',
    'Эвелина',
    'Эльвира',
    'Эмма',
    'Юлиана',
    'Ядвига',
    'Ясмина',
    'Агата',
    'Аглая',
    'Азалия',
    'Аксинья',
]

const femaleSurnames = maleSurnames.map(
    (surname) => surname + (surname.endsWith('ий') ? 'я' : 'а')
)

const femalePatronymics = maleNames.map((name) => name + 'овна')

let data = {
    email: 'ivangeliumsan@yandex.ru',
    password: '20071998Leo!',
    source: 'plugin',
}

//#endregion

let auth_token = ''

const login = (login, password) => {
    const data = {
        email: login,
        password: password,
        source: 'plugin',
    }
    const logUrl = `https://${stage ? stageString : ''}huntlee.ru/api/auth/login`
    fetch(logUrl, {
        method: 'POST',
        headers: {
            accept: '*/*',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then((response) => response.json()) // Преобразуем ответ в JSON
        .then((result) => {
            auth_token = result.message.auth_token
            me(auth_token)
        })
        .catch((error) => {
            console.error('Ошибка:', error) // Обрабатываем ошибку
            return error
        })
}

async function me(auth_token) {
    const link = `https://${stage ? stageString : ''}huntlee.ru/api/me`
    await fetch(link, {
        method: 'GET',
        headers: {
            accept: '*/*',
            'X-DCRT-HRM-AUTH': auth_token,
        },
    })
        .then((response) => response.json()) // Преобразуем ответ в JSON
        .then((result) => {
            console.log(result)
            uiLogin(result)
        })
        .catch((error) => {
            console.error('Ошибка:', error) // Обрабатываем ошибку
            return error
        })
}

async function postApplicant() {
    const data = generateApplicant(dataApplicant)
    const link = `https://${stage ? stageString : ''}huntlee.ru/api/applicants`

    await fetch(link, {
        method: 'POST',
        headers: {
            accept: '*/*',
            'X-DCRT-HRM-AUTH': auth_token,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then((response) => response.json()) // Преобразуем ответ в JSON
        .then((result) => {
            console.log('Успех:', result) // Обрабатываем успешный ответ
            updateTag(result.message.id)
            return result
        })
        .catch((error) => {
            console.error('Ошибка:', error) // Обрабатываем ошибку
            return error
        })
}

function rnd(num = 100) {
    return Math.floor(Math.random() * num)
}

function generateApplicant(ap) {
    if (rnd() > 50) {
        ap.gender = 'male'
        ap.first_name = maleNames[rnd(maleNames.length) - 1]
        ap.last_name = maleSurnames[rnd(maleSurnames.length) - 1]
        ap.middle_name = malePatronymics[rnd(malePatronymics.length) - 1]
        if (photos) {
            ap.photo = `'data:image/jpeg;base64,${vars.photoMale}`
        }
        if (vac !== '') {
            ap.vacavacancy_id = vac
        }
        if (stat !== '') {
            ap.status_id = stat
        }
    } else {
        ap.gender = 'female'
        ap.first_name = femaleNames[rnd(femaleNames.length) - 1]
        ap.last_name = femaleSurnames[rnd(femaleSurnames.length) - 1]
        ap.middle_name = femalePatronymics[rnd(femalePatronymics.length) - 1]
        if (photos) {
            ap.photo = `'data:image/jpeg;base64,${vars.photoFemale}`
        }
        if (vac !== '') {
            ap.vacancy_id = vac
        }
        if (stat !== '') {
            ap.status_id = stat
        }
    }

    ap.position = professions[rnd(professions.length) - 1]
    ap.phone = Math.floor(Math.random() * 1000000000)
    return ap
}

function getLog(e) {
    const fd = new FormData(logForm)
    const obj = Object.fromEntries(fd)
    if (obj.stageCheck === 'on') {
        stage = true
    } else {
        stage = false
    }

    login(obj.email, obj.pass)
}

function getCreate(e) {
    if (auth_token === '' || auth_token === undefined) {
        alert('Вы не авторизовались')
        return
    }

    const fd = new FormData(createForm)
    const obj = Object.fromEntries(fd)
    obj.PhotoCheck === 'on' ? (photos = true) : (photos = false)

    vac = obj.vacId
    stat = obj.statId
    let num = 1
    obj.numb === '' ? (num = 1) : (num = obj.numb)
    load(num)
}

function uiLogin(me) {
    while (meCont.firstElementChild !== null) {
        meCont.firstElementChild.remove()
    }

    if (me.status === 'error') {
        const logError = document.createElement('div')
        logError.textContent = 'Ошибка'
        meCont.appendChild(logError)
        return
    }

    const logName = document.createElement('h1')
    logName.textContent = `${me.message.name} ${me.message.last_name}`
    const logMail = document.createElement('div')
    logMail.textContent = `Почта: ${me.message.email}`
    const logTariff = document.createElement('div')
    logTariff.textContent = `Тариф: ${me.message.tariff_name}`
    const logMember = document.createElement('div')
    let isOwner = ''
    me.message.member_type === 'owner'
        ? (isOwner = 'Рекрутер')
        : (isOwner = 'Заказчик')
    logMember.textContent = `${isOwner}`
    const logAppCount = document.createElement('div')
    logAppCount.textContent = `Количество кандидатов: ${me.message.applicants_count}`
    const logEnv = document.createElement('div')
    logEnv.textContent = `Окружение: ${stage ? 'Стейдж' : 'Продакшен'}`
    const logToken = document.createElement('div')
    logToken.textContent = `${me.message.token}`
    logToken.style.letterSpacing = '-0.45rem'

    meCont.appendChild(logName)
    meCont.appendChild(logMail)
    meCont.appendChild(logTariff)
    meCont.appendChild(logMember)
    meCont.appendChild(logAppCount)
    meCont.appendChild(logEnv)
    meCont.appendChild(logToken)

    getTags()
}

function getTags() {
    fetch(`https://${stage ? stageString : ''}huntlee.ru/api/tags`, {
        method: 'GET',
        headers: {
            accept: 'application/json',
            'X-DCRT-HRM-AUTH': auth_token,
        },
    })
        .then((response) => response.json()) // Преобразуем ответ в JSON
        .then((result) => {
            for (let i = 0; i < result.message.length; i++) {
                result.message[i].name === 'Autogenerated applicant'
                    ? (HasTag = result.message[i].id)
                    : (HasTag = false)
            }
            if (HasTag === false) {
                createTag()
            }
        })
        .catch((error) => {
            console.error('Ошибка:', error) // Обрабатываем ошибку
            return error
        })
}

function createTag() {
    const tagJson = {
        name: 'Autogenerated applicant',
        color: '#FF0000',
        description:
            'Эта метка помечает генерированных кандидатов, на неё ориентируются все операции со сгенерированными кандидатами',
    }
    fetch(`https://${stage ? stageString : ''}huntlee.ru/api/tags`, {
        method: 'POST',
        headers: {
            accept: 'application/json',
            'X-DCRT-HRM-AUTH': auth_token,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(tagJson),
    })
        .then((response) => response.json()) // Преобразуем ответ в JSON
        .then((result) => {
            HasTag = result.message.id
        })
}

function updateTag(id) {
    fetch(
        `https://${stage ? stageString : ''}huntlee.ru/api/applicants/${id}/update_tags`,
        {
            method: 'POST',
            headers: {
                accept: 'application/json',
                'X-DCRT-HRM-AUTH': auth_token,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ tags: [HasTag] }),
        }
    )
}

const timer = (ms) => new Promise((res) => setTimeout(res, ms))

async function load(num) {
    // We need to wrap the loop into an async function for this to work
    for (var i = 0; i < num; i++) {
        postApplicant()
        console.log(i)
        await timer(1600) // then the created Promise can be awaited
    }
}
