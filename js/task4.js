const decrementButton = document.querySelector('button[data-action = "decrement"]')
const incrementButton = document.querySelector('button[data-action = "increment"]')
const counter = document.querySelector("#value")
let x = 0
counter.textContent = x
// const addOne = () =>  console.log(x);
const addOne = function () {
    // console.log(x)
    // console.log(counter.textContent)

    console.log(Number(counter.textContent) + 1)
}
const removeOne = () => (x -= 1)
incrementButton.addEventListener("click", addOne)
decrementButton.addEventListener("click", removeOne)
counter.textContent = x
console.log(x)
