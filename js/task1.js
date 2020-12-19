const getClassQuantity = function (classRef) {
    // const classQuanity = document.getElementsByClassName(classRef).length
    const classQuanity = document.querySelectorAll(".item").length

    // console.log(meh)
    return `В списке ${classQuanity} категории.`
}

console.log(getClassQuantity("item"))
