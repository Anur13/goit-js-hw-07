const ingredients = ["Картошка", "Грибы", "Чеснок", "Помидоры", "Зелень", "Приправы"]

const makeListItem = (arr) => {
    const listItemArr = []
    const ingredientsList = document.querySelector("#ingredients")
    arr.forEach((item) => {
        const listItem = document.createElement(`li`)
        listItem.textContent = item
        listItemArr.push(listItem)
    })
    ingredientsList.append(...listItemArr)
    // console.log(ingredientsList)
}
makeListItem(ingredients)
