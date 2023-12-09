// console.log(`${(Math.floor(125 % 60))}`.slice(-2))

// console.log("0.11".slice(-2))

// console.log(Math.random() * 10)
// console.log(Math.floor(Math.random() * 10))

function replaceSomePortWithSymbol(string) {
    if (string.length < 10) {
        return "Please string must be greater than or equal to 10"
    }
    let firstPart = string.substring(0, string.length - 4)
    let someString = ""

    let len = firstPart.length
    while (len > 0) {
       someString += "*"
       len--
    }
    return someString + string.substring(string.length-4)
}

console.log(replaceSomePortWithSymbol("09993899383939"))