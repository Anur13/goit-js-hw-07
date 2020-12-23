const decrementButton = document.querySelector('button[data-action = "decrement"]')
const incrementButton = document.querySelector('button[data-action = "increment"]')
const counter = document.querySelector("#value")
let counterValue = 0

const addOne = function () {
    counter.textContent = Number(counter.textContent) + 1
}
const removeOne = function () {
    counter.textContent = Number(counter.textContent) - 1
}
incrementButton.addEventListener("click", addOne)
decrementButton.addEventListener("click", removeOne)
