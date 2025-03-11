import { is } from 'date-fns/locale'
import './index.css'
export {bg,crAp,crUs}
const crApJs = require("./crAp")    
const crUsJs = require("./crUs")    

const bg = document.querySelector(".bg")

const crAp = document.querySelector(".crAp")
crAp.addEventListener("click",()=> crApJs.initUi())
const crUs = document.querySelector(".crUs")
crUs.addEventListener("click",()=> crUsJs.crUsUi())


const dd = document.querySelector(".drop-btn")
dd.addEventListener("click",()=>{
    if (dd.nextElementSibling.classList.contains('hide')) {
        dd.nextElementSibling.classList.remove('hide');
    }
    else {
        dd.nextElementSibling.classList.add('hide');
    }

})