const getClassQuantity = function (classRef) {
    const classQuantity = document.querySelectorAll(classRef)

    // const classQuanity = document.getElementsByClassName(classRef).length

    console.log(`В списке ${classQuantity.length} категории.`)

    const classReff = classQuantity.forEach(function (child) {
        const titleRef = child.querySelector("h2")
        const listRef = child.querySelector("ul")
        console.log(`Категория:`, titleRef.textContent)
        console.log(`Количество элементов:`, listRef.children.length)
    })

    // const classReff = classQuantity.forEach((mabo) => console.log(mabo[1]))
}

console.log(getClassQuantity(".item"))
