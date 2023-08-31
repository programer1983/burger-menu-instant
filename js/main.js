
const burger = document.querySelector(".burger")
const nav = document.querySelector(".nav")

burger.addEventListener("click", openBurger)


function openBurger(){
    burger.classList.toggle("active")
    nav.classList.toggle("open")
}



