import users from "../users.js"

// вариант3
// const getSortedUniqueSkills = function (users) {
//     return users.reduce(function (allSkills, user) {
//         allSkills.push(...user.skills)
//         return allSkills
//     }, [])
// }
// const nah = getSortedUniqueSkills(users)
// const meh = nah.reduce(function (acc, skill) {
//     if (acc.hasOwnProperty(skill)) {
//         acc[skill] += 1
//     }
//     acc[skill] = 1
//     if (acc[skill] > 1) {
//         delete acc[skill]
//     }
//     return acc
// }, {})
// console.log(Object.keys(meh).sort())

// вариант 2
// const getSortedUniqueSkills = function (users) {
//     return users.reduce(function (allSkills, user) {
//         allSkills.push(...user.skills)

//         let uniqueSkills = []
//         allSkills.forEach((skill) => {
//             if (!uniqueSkills.includes(skill)) {
//                 uniqueSkills.push(skill)
//             }
//         })
//         uniqueSkills.sort()
//         return uniqueSkills
//     }, [])
// }

// console.log(getSortedUniqueSkills(users))
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]

// вариант 3
const getSortedUniqueSkills = function (users) {
    return users.reduce(function (allSkills, user) {
        allSkills.push(...user.skills)

        let uniq = [...new Set(allSkills)]
        const result = uniq.sort()
        return result
    }, [])
}

// console.log(getSortedUniqueSkills(users))
