// const names  = ["Ufere", "kalu", "favour"]
// const joined_names = names.map((name) => name).join(', ')
// console.log(joined_names)

function showTime(time) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
}

function date(time) {
    let month = time.getMonth()
    let date = time.getDate()
    let year = time.getFullYear()
    return `${month + 1}/${date}/${year}`
}
// console.log(date(new Date()))

// console.log(new Date().getFullYear())
// console.log(new Date().getMonth())
// console.log(new Date().getDate())

const skills = {
  html: false,
  css: true,
  JavaScript: true,
  python: true,
  ansible: false
}

// const formatedSkills = []
// for (const skill in skills) {
//   console.log(skill)
//   if (skills[skill]) {
//     formatedSkills.push(skill)
//   }
// }
// console.log(formatedSkills)

const vehicles = ['mazda', 'mazda', 'mercedez', 'toyota', 'nissan', 'nissan', 'nissan', 'toyota', 'toyota', 'mazda']
const vehicles_count = vehicles.reduce((obj, item) => {
    if (!obj[item]) {
      obj[item] = 0
    }
    obj[item]++
    return obj
}, {})
console.log(vehicles_count)