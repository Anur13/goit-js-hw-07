const ingredients = ["Картошка", "Грибы", "Чеснок", "Помидоры", "Зелень", "Приправы"]

const makeListItem = function (arr) {
    const listItemArr = []
    const ingredientsList = document.querySelector("#ingredients")
    arr.forEach(function (item) {
        const listItem = document.createElement(`li`)
        listItem.textContent = item
        listItemArr.push(listItem)
    })
    ingredientsList.append(...listItemArr)
    // console.log(ingredientsList)
}
makeListItem(ingredients)
