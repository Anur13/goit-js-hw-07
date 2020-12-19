import users from "../users.js"

// const getInactiveUsers = function (users) {
//     return users.filter(function (user) {
//         return !user.isActive
//     })
// }
const getInactiveUsers = (users) => users.filter((user) => !user.isActive)
console.log(getInactiveUsers(users)) // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]
