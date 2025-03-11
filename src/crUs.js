const bg = require("./index")
export {crUsUi}





const crUsUi = ()=> {
    if (bg.bg.lastElementChild.className !== "heheader") {
        while (bg.bg.lastElementChild.className !== "heheader") {
         bg.bg.lastElementChild.remove()   
        }

    }
    bg.crUs.style.opacity = "100%"
    bg.crAp.style.opacity = "50%"



}