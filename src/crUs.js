const bg = require("./index")
export {crUsUi}
const users = ["alfa", "artem","kirill","stas","yulian",'test']
let usersObj = {}




const crUsUi = ()=> {
    if (bg.bg.lastElementChild.className !== "heheader") {
        while (bg.bg.lastElementChild.className !== "heheader") {
         bg.bg.lastElementChild.remove()   
        }

    }
    bg.crUs.style.opacity = "100%"
    bg.crAp.style.opacity = "50%"

    const header = document.createElement("div")
    header.className = "header"
    const masscont = document.createElement("div")
    masscont.className = "masscont"
    const signForm = document.createElement("form")
    signForm.className = "signForm input-cont"
    signForm.action = "submit"
    const passPassCont = document.createElement("div")
    passPassCont.className = "pass-pass-cont input-cont"
    const passPassLabel = document.createElement("label")
    passPassLabel.setAttribute("for","mail")
    passPassLabel.textContent = "Почта (будет использована как пароль)"
    const passPassInput = document.createElement("input")
    passPassInput.placeholder = "addres@domen.domen"
    passPassInput.type = "email"
    passPassInput.name = "mail"
    passPassInput.id = "mail"

    const sideInfo = document.createElement("div")
    sideInfo.className = "sideInfo"
    const nameput = document.createElement("div")
    nameput.className = "nameput input-cont"
    const nameputLabel = document.createElement("label")
    nameputLabel.setAttribute("for","userName")
    nameputLabel.textContent = "Имя пользователя"
    const nameputInput = document.createElement("input")
    nameputInput.placeholder = "Ivan"
    nameputInput.type = "text"
    nameputInput.name = "userName"
    nameputInput.id = "userName"

    const compaput = document.createElement("div")
    compaput.className = "compaput input-cont"
    const compaputLabel = document.createElement("label")
    compaputLabel.setAttribute("for","userCompany")
    compaputLabel.textContent = "Название компании"
    const compaputInput = document.createElement("input")
    compaputInput.placeholder = "Фирма 'Твоя Работа'"
    compaputInput.type = "text"
    compaputInput.name = "userCompany"
    compaputInput.id = "userCompany"

    const dd = document.createElement("div")
    dd.className = "dd input-cont"
    const dropdown = document.createElement("div")
    dropdown.className = "dropdown"
    const dropBtn = document.createElement("div")
    dropBtn.className = "drop-btn"
    dropBtn.textContent = "Автор"

    const myDropdown = document.createElement("div")
    myDropdown.className = "dropdown-content hide"
    myDropdown.id = "myDropdown"

    for (let i = 0; i < users.length; i++) {
        usersObj[users[i]] = document.createElement("div")
        usersObj[users[i]].className = "ddEl"
        usersObj[users[i]].textContent = users[i]
        usersObj[users[i]].addEventListener("click",()=>{
            dropBtn.textContent = usersObj[users[i]].textContent
            myDropdown.classList.add('hide');
        })
    }

    const btnContainer = document.createElement("div")
    btnContainer.className = "btn-container input-cont"
    const signUp = document.createElement("input")
    signUp.className = "btn"
    signUp.type = "submit"
    signUp.value = "Создать"


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

    dropBtn.addEventListener("click",()=>{
        console.log(myDropdown)
        if (myDropdown.classList.contains('hide')) {
            myDropdown.classList.remove('hide');
        }
        else {
            myDropdown.classList.add('hide');
        }

    })

    signForm.appendChild(btnContainer)
    btnContainer.appendChild(signUp)

}

