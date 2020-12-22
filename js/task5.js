const nameInpuRef = document.querySelector("#name-input")
const nameTextRef = document.querySelector("#name-output")
nameInpuRef.addEventListener("change", eventAction)
function eventAction(event) {
    if (!event.target.value) {
        nameTextRef.textContent = "незнакомец"
    } else {
        nameTextRef.textContent = event.target.value
    }
}
