const sliderRef = document.querySelector("#font-size-control")
const textRef = document.querySelector("#text")
sliderRef.addEventListener("click", action)
function action() {
    textRef.style.fontSize = sliderRef.value * 0.4 + "px"
}
