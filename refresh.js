function sumAll(arr) {
    if (arr &&
        Array.isArray(arr) &&
        arr.length === 2 &&
        typeof arr[0] === "number" &&
        typeof arr[1] === "number") {
        arr.sort((a, b) => a - b)
        let res = arr[0] + arr[1]
        for (let i = arr[0] + 1; i < arr[1]; i++) {
            res += i
        }
        return res
    }
}

function frankenSplice(arr1, arr2, n) {
    let combinedArrays = arr2.slice()
    combinedArrays.splice(n, 0, ...arr1)
    return combinedArrays
}
// console.log(frankenSplice([2, 2, 3, 4, 2], [2, 3, 1, 1, 0], 3))
// console.log(sumAll([2, 9]))

function confirmEnding(str, target) {
    const newStr = str.split(" ").join("")
    const newStrL = newStr.length
    const targetL = target.length
    const targetIdx = newStrL - targetL
    const subStr = newStr.substring(targetIdx)

    return subStr === target
}

// console.log(confirmEnding("Going to america", "america"))
function repeatStringNumTimes(str, num) {
    let repeatedStr = ""
    if (num < 0) {
        return repeatedStr
    }
    for (let i = 0; i < num; i++) {
        repeatedStr += str
    }
    return repeatedStr
}

// console.log(repeatStringNumTimes("congratulations", 3))
function findElement(arr, func) {
    let ele = "";
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i]) === true) {
            ele = arr[i];
            break;
        } else {
            ele = undefined;
        }
    }
    return ele;
}
// console.log(findElement([1, 2, 4, 3, 5, 6], num => num % 2 === 0))

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const dateNumnbers = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20",
"21", "22", "23","24", "25", "26", "27", "28", "29", "30", "31"]

const d = new Date("2022-07-31")
console.log(dateNumnbers[d.getDate()])
console.log(monthNames[d.getMonth()])