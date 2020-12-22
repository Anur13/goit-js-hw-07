const controlsRef = document.querySelector("#controls")
const inputRef = controlsRef.querySelector("input")
const renderBtnRef = document.querySelector("[data-action=render]")
const destroyBtnRef = document.querySelector("[data-action=destroy]")
console.log(inputRef.textContent)
const boxesRef = document.querySelector("#boxes")
renderBtnRef.addEventListener("click", createDiv)
function createDiv() {
    const allDivs = []
    console.log(inputRef.value)

    for (let i = 0; i <= inputRef.value; i++) {
        const initialSize = 30
        const newDiv = document.createElement("div")
        const r = () => (Math.random() * 256) >> 0
        const color = `rgb(${r()}, ${r()}, ${r()})`
        newDiv.style.backgroundColor = color
        newDiv.style.width = initialSize + 10 * i + "px"
        newDiv.style.height = initialSize + 10 * i + "px"

        allDivs.push(newDiv)
    }
    boxesRef.append(...allDivs)
    // console.log(boxesRef)
}
destroyBtnRef.addEventListener("click", clear)
function clear() {
    boxesRef.innerHTML = ""
}
