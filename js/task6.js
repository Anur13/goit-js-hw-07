const validationInputRef = document.querySelector("#validation-input")
validationInputRef.addEventListener("blur", event)
function event(action) {
    if (action.target.value.length === Number(validationInputRef.dataset.length)) {
        validationInputRef.classList.remove("invalid")
        validationInputRef.classList.add("valid")
    } else {
        validationInputRef.classList.remove("valid")
        validationInputRef.classList.add("invalid")
    }
}
