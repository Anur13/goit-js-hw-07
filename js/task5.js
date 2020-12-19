import users from "../users.js"

// const getUserWithEmail = function (arr, email) {
//     return arr.find(function (user) {
//         return user.email === email
//     })
// }

const getUserWithEmail = (users, email) => users.find((user) => user.email === email)

console.log(getUserWithEmail(users, "shereeanthony@kog.com")) // {объект пользователя Sheree Anthony}
console.log(getUserWithEmail(users, "elmahead@omatom.com")) // {объект пользователя Elma Head}
