import users from "../users.js"

// const getUsersWithEyeColor = function (users, color) {
//     return users.filter(function (user) {
//         return user.eyeColor === color
//     })
// }
const getUsersWithEyeColor = (users, color) => users.filter((user) => user.eyeColor === color)

console.log(getUsersWithEyeColor(users, "blue")) // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]
