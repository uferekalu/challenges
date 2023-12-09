const countriesMap = new Map()
console.log(countriesMap)
countriesMap.set("Finland", 'Helsinki')
countriesMap.set('Nigeria', 'Abuja')
countriesMap.set('Sweden', 'Stockholm')
countriesMap.set('Norway', 'Oslo')
// console.log(countriesMap)
// console.log(countriesMap.size)

// console.log(countriesMap.get('Nigeria'))
// console.log(countriesMap.has('Finland'))

// for (const country of countriesMap) {
//     console.log(country)
// }

const numberSet = new Set()
for (let i = 0; i <= 10; i++) {
    numberSet.add(i)
}
console.log(numberSet)
console.log(numberSet.delete(1))
console.log(numberSet)
numberSet.clear()
console.log(numberSet)
