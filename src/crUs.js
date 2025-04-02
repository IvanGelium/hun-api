const bg = require('./index')
export { crUsUi }
const users = ['alfa', 'artem', 'kirill', 'stas', 'yulian', 'test']
let usersObj = {}
let signForm = ''
let dropBtn = ''
let resp = ''

const crUsUi = () => {
    if (bg.bg.lastElementChild.className !== 'heheader') {
        while (bg.bg.lastElementChild.className !== 'heheader') {
            bg.bg.lastElementChild.remove()
        }
    }
    bg.crUs.style.opacity = '100%'
    bg.crAp.style.opacity = '50%'

    const header = document.createElement('div')
    header.className = 'header'
    const masscont = document.createElement('div')
    masscont.className = 'masscont'
    signForm = document.createElement('form')
    signForm.className = 'signForm input-cont'
    signForm.action = 'submit'
    const passPassCont = document.createElement('div')
    passPassCont.className = 'pass-pass-cont input-cont'
    const passPassLabel = document.createElement('label')
    passPassLabel.setAttribute('for', 'mail')
    passPassLabel.textContent = 'Почта (пароль "adminadmin")'
    const passPassInput = document.createElement('input')
    passPassInput.placeholder = 'addres@domen.domen'
    passPassInput.type = 'email'
    passPassInput.name = 'mail'
    passPassInput.id = 'mail'

    const sideInfo = document.createElement('div')
    sideInfo.className = 'sideInfo'
    const nameput = document.createElement('div')
    nameput.className = 'nameput input-cont'
    const nameputLabel = document.createElement('label')
    nameputLabel.setAttribute('for', 'userName')
    nameputLabel.textContent = 'Имя пользователя'
    const nameputInput = document.createElement('input')
    nameputInput.placeholder = 'Ivan'
    nameputInput.value = 'Admin'
    nameputInput.type = 'text'
    nameputInput.name = 'userName'
    nameputInput.id = 'userName'

    const compaput = document.createElement('div')
    compaput.className = 'compaput input-cont'
    const compaputLabel = document.createElement('label')
    compaputLabel.setAttribute('for', 'userCompany')
    compaputLabel.textContent = 'Название компании'
    const compaputInput = document.createElement('input')
    compaputInput.placeholder = "Фирма 'Твоя Работа'"
    compaputInput.type = 'text'
    compaputInput.name = 'userCompany'
    compaputInput.id = 'userCompany'

    const dd = document.createElement('div')
    dd.className = 'dd input-cont'
    const dropdown = document.createElement('div')
    dropdown.className = 'dropdown'
    dropBtn = document.createElement('div')
    dropBtn.className = 'drop-btn'
    dropBtn.textContent = 'Автор'

    const myDropdown = document.createElement('div')
    myDropdown.className = 'dropdown-content hide'
    myDropdown.id = 'myDropdown'

    for (let i = 0; i < users.length; i++) {
        usersObj[users[i]] = document.createElement('div')
        usersObj[users[i]].className = 'ddEl'
        usersObj[users[i]].textContent = users[i]
        usersObj[users[i]].addEventListener('click', () => {
            dropBtn.textContent = usersObj[users[i]].textContent
            myDropdown.classList.add('hide')
        })
    }

    const btnContainer = document.createElement('div')
    btnContainer.className = 'btn-container input-cont'
    const signUp = document.createElement('input')
    signUp.className = 'btn'
    signUp.type = 'submit'
    signUp.value = 'Создать'

    resp = document.createElement('div')
    resp.classList = 'me-container masscont'
    resp.textContent = 'Введите данные пользователя'

    bg.bg.appendChild(header)
    header.appendChild(masscont)
    masscont.appendChild(signForm)
    signForm.appendChild(passPassCont)

    passPassCont.appendChild(passPassLabel)
    passPassCont.appendChild(passPassInput)

    signForm.appendChild(sideInfo)
    sideInfo.appendChild(nameput)
    nameput.appendChild(nameputLabel)
    nameput.appendChild(nameputInput)
    sideInfo.appendChild(compaput)
    compaput.appendChild(compaputLabel)
    compaput.appendChild(compaputInput)

    signForm.appendChild(dd)
    dd.appendChild(dropdown)
    dropdown.appendChild(dropBtn)
    dropdown.appendChild(myDropdown)
    for (let i = 0; i < users.length; i++) {
        myDropdown.appendChild(usersObj[users[i]])
    }

    dropBtn.addEventListener('click', () => {
        console.log(myDropdown)
        if (myDropdown.classList.contains('hide')) {
            myDropdown.classList.remove('hide')
        } else {
            myDropdown.classList.add('hide')
        }
    })

    signForm.appendChild(btnContainer)
    btnContainer.appendChild(signUp)
    header.appendChild(resp)

    signUp.addEventListener('click', (e) => getData(e))
}

function getData(e) {
    e.preventDefault()
    const fd = new FormData(signForm)
    const obj = Object.fromEntries(fd)
    console.log(obj, dropBtn.textContent)
    signUp(
        obj.mail,
        obj.userName,
        obj.userCompany,
        dropBtn.textContent === 'Автор' ? 'test' : dropBtn.textContent
    )
}

function signUp(email, name, company, author) {
    const json = {
        admin_user: {
            email: email,
            password: 'adminadmin',
            password_confirmation: 'adminadmin',
            name: name === '' ? 'Admin' : name,
            nick: 'Sample Ivan',
            member_type: 'owner',
            company: company === '' ? 'Без компании' : company,
            utm_source: author,
            is_adv_agree: true,
            time_zone: 'Asia/Yekaterinburg',
            admin_user_setting: {
                is_hide_history_applicant: true,
                is_hide_experience: true,
                is_hide_education: true,
                is_hide_chat: false,
                pick_sort_vacancies: 'owners',
                pick_sort_applications: 'table',
                download_pdf: {
                    is_first_name: true,
                    is_last_name: true,
                    is_middle_name: true,
                    is_photo: true,
                    is_gender: true,
                    is_birthday: true,
                    is_age: true,
                    is_country: true,
                    is_citizenship: true,
                    is_company: true,
                    is_position: true,
                    is_phone: true,
                    is_email: true,
                    is_tg: true,
                    is_skype: true,
                    is_money: true,
                    is_total_experience: true,
                    is_source_add: true,
                    is_source_name: true,
                    is_about_me: true,
                    is_skills: true,
                    is_vacancies: true,
                    is_worklog: true,
                    is_experience: true,
                    is_education: true,
                    is_contacts: true,
                    is_tags: true,
                    is_unidentified_info: true,
                    is_resume_urls: true,
                },
            },
        },
    }

    fetch('https://huntlee.ru/api/sign_up', {
        method: 'POST',
        headers: {
            accept: '*/*',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(json),
    })
        .then((response) => response.json()) // Преобразуем ответ в JSON
        .then((result) => {
            console.log(result)
            if (result.status === 'error') {
                resp.textContent = `Ответ: ${result.message}`
            }
            if (result.status === 'success') {
                resp.textContent = `Ответ: ID: ${result.message.admin_user.id}; Почта: ${result.message.admin_user.email}; Имя: ${result.message.admin_user.name};`
            }
        })
        .catch((error) => {
            console.error('Ошибка:', error) // Обрабатываем ошибку
            return error
        })

    resp.textContent = 'Загрузка...'
}
