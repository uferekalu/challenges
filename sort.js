const arr = [2,3,4,7,8,3,4,10]
const n = 2

function insertionSort2(n, arr) {
    if (n === 1) {
        return arr
    }
    let i = 1;
    while (i < arr.length) {
        const element = arr[i]
        let j = i - 1
        while (j >= 0 && arr[j] > element) {
            arr[j + 1] = arr[j]
            j--
        }
        arr[j+ 1] = element
        i++
        console.log(arr.join(' '))
    }
    return arr
}

console.log(insertionSort2(2, arr))