import users from "../users.js"
// const calculateTotalBalance = function (users) {
//     return users.reduce(function (balance, user) {
//         return balance + user.balance
//     }, 0)
// }
const calculateTotalBalance = (users) => users.reduce((balance, user) => balance + user.balance, 0)
console.log(calculateTotalBalance(users)) // 20916
