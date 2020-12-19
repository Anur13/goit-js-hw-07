import users from "../users.js"

// const getNamesSortedByFriendsCount = function (users) {
//     return users
//         .sort(function (a, b) {
//             return a.friends.length - b.friends.length
//         })
//         .map(function (user) {
//             return user.name
//         })
// }
const getNamesSortedByFriendsCount = (users) => users.sort((a, b) => a.friends.length - b.friends.length).map((user) => user.name)
// const getNamesSortedByFriendsCount
console.log(getNamesSortedByFriendsCount(users))
// // [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]
