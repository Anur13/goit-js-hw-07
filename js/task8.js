import users from "../users.js"

// const getUsersWithFriend = function (users, friendName) {
//     return users
//         .filter(function (user) {
//             // console.log(user.friends.includes(friendName))
//             return user.friends.includes(friendName)
//         })
//         .map(function (user) {
//             return user.name
//         })
// }
const getUsersWithFriend = (users, friendName) => users.filter((user) => user.friends.includes(friendName)).map((user) => user.name)
console.log(getUsersWithFriend(users, "Briana Decker")) // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, "Goldie Gentry")) // [ 'Elma Head', 'Sheree Anthony' ]
