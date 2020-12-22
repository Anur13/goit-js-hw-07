const images = [
    {
        url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        alt: "White and Black Long Fur Cat",
    },
    {
        url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        alt: "Orange and White Koi Fish Near Yellow Koi Fish",
    },
    {
        url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        alt: "Group of Horses Running",
    },
]

const makeListItem = function (arr) {
    const itemsArray = []
    const galerryList = document.querySelector("#gallery")
    console.dir(galerryList)

    arr.forEach(function (item) {
        const listItem = document.createElement("li")
        const image = document.createElement("img")
        image.src = item.url
        image.alt = item.alt
        listItem.append(image)
        itemsArray.push(listItem)
    })
    galerryList.append(...itemsArray)
    console.log(galerryList)
}
makeListItem(images)
