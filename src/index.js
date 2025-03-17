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


