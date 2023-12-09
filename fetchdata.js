import fetch from "node-fetch";
// const endpoint =
//   "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";
// const cities = [];

// async function fetchCities() {
//   await fetch(endpoint)
//     .then((blob) => blob.json())
//     .then((data) => cities.push(...data));
//   console.log(cities);
// }

// const allcities = fetchCities()
// // var str = "Is this all there is?";
// // var patt1 = new RegExp("is","gi");
// // console.log(str.match(/is/gi))

// console.log(allcities)

// function findMatches(wordToMatch, cities) {
//     return cities.filter((place) => {
//         const regex = new RegExp(wordToMatch, 'gi')
//         return place.city.match(regex) || place.state.match(regex)
//     })
// }

// // console.log(findMatches("new york", allcities))

var fruits = ["banana", "mango", "plantain", "tangeline", "apple"];
// console.log(fruits.slice(0, fruits.length).join(", ") + ` and ${fruits[fruits.length-1]}`)
var index = Math.floor(Math.random() * fruits.length);
// console.log(fruits[index])

const url = "https://restcountries.com/v2/all";
fetch(url)
  .then((response) => response.json())
  .then((countries) => {
    console.log(countries);
  }).catch((error) => {
    console.log(error)
  })
