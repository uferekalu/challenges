const higherOrder = n => {
    const doSmething = m => {
        const doWhatEver = t => {
            return 2 * n + 3 * m + t 
        }
        return doWhatEver
    }
    return doSmething
}

// console.log(higherOrder(2)(3)(10))

const sumArray = (arr) => {
    let sum = 0
    const callback = function(element) {
        sum += element
    }
    arr.forEach(callback)
    return sum
}

console.log(sumArray([1,2,3,4,5]))