const btnOpen = document.querySelector(".iconShareContainer")
const btnClose = document.querySelector(".iconShareContainer2")

btnOpen.addEventListener("click", (e) => document.querySelector(".card").classList.add("share"))

btnClose.addEventListener("click", (e) => document.querySelector(".card").classList.remove("share"))

