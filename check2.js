let arr = ["orange", "banana", "mango", "pear"]
const arrCap = arr.map((data) => {
    const dt = (data.slice(0, 1).toUpperCase() + data.slice(1))
    return dt
})

console.log(arrCap)