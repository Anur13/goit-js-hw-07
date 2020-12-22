const decrementButton = document.querySelector('button[data-action = "decrement"]')
const incrementButton = document.querySelector('button[data-action = "increment"]')
const counter = document.querySelector("#value")
let counterValue = 0
// const addOne = () =>  console.log(x);
// const addOne = function () {
//     counterValue += 1
//     counter.textContent = counterValue
//     return counter.textContent
// }
// const removeOne = function () {
//     counterValue -= 1

//     counter.textContent = counterValue
//     return counter.textContent
// }
// incrementButton.addEventListener("click", addOne)
// decrementButton.addEventListener("click", removeOne)

const addOne = function () {
    counterValue += 1
    counter.textContent = counterValue
    return counter.textContent
}
const removeOne = function () {
    counterValue -= 1

    counter.textContent = counterValue
    return counter.textContent
}
incrementButton.addEventListener("click", addOne)
decrementButton.addEventListener("click", removeOne)
