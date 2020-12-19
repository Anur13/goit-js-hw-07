import users from "../users.js"

// const getUsersWithGender = function (arr, gender) {
//     return arr
//         .filter(function (user) {
//             return user.gender === gender
//         })
//         .map(function (user) {
//             return user.name
//         })
// }
const getUsersWithGender = (users, gender) => users.filter((user) => user.gender === gender).map((user) => user.name)

console.log(getUsersWithGender(users, "male")) // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

// employees.map(emp => {
//     return {
//         name: emp.name,
//         age: getAge(emp.birthDate)
// }).filter(emp => emp.age > 30)
