const btnOpen = document.querySelector(".iconShareContainer")
const btnClose = document.querySelector(".iconShareContainer2")

btnOpen.addEventListener("click", (e) => document.querySelector(".card").classList.toggle("share"))

btnClose.addEventListener("click", (e) => document.querySelector(".card").classList.remove("share"))

