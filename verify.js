let countries = [
  "ALBANIA",
  "BOLIVIA",
  "CANADA",
  "DENMARK",
  "ETHIOPIA",
  "FINLAND",
  "GERMANY",
  "HUNGARY",
  "IRELAND",
  "JAPAN",
  "KENYA",
];

let countriesEndsWithIA = countries.filter((country) => country.endsWith("IA"));
let countriesWithLAND = countries.filter((country) => country.includes("LAND"));
let firstThreeLetters = countries.map((country) => country.slice(0, 3));
let countriesToLower = countries.map((country) => country.toLowerCase());

// console.log("Ends with IA", countriesEndsWithIA)
// console.log("With LAND", countriesWithLAND)
// console.log("First Three letters", firstThreeLetters)
// console.log("Countries to lowercase", countriesToLower)

const scores = [
  { name: "Asabeneh", score: 95 },
  { name: "Lidiya", score: 98 },
  { name: "Mathias", score: 80 },
  { name: "Elias", score: 50 },
  { name: "Martha", score: 85 },
  { name: "John", score: 100 },
];

let scoresGreaterThanEighty = scores.filter((score) => score.score > 80);
// console.log("Score more than 80", scoresGreaterThanEighty)

const numbers = [1, 2, 3, 4, 5];
const total = numbers.reduce((acc, num) => acc + num, 0);
// console.log(total)

const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
const areAllStr = names.every((name) => typeof name === "string");

for (let name of names) {
  console.log(`type of ${name}: `, typeof name);
}

// console.log(areAllStr)

const countLetterThatBeginsACountry = (countries) => {
  let table = {};
  let alphabets = "abcdefghijklmnopqrstuvwxyz";

  for (let country of countries) {
    for (let a of alphabets) {
      if (country.startsWith(a)) {
        if (!table[a]) {
          table[a] = 1;
        } else {
          table[a] += 1;
        }
      }
    }
  }
  return table;
};
// console.log(countLetterThatBeginsACountry(['Asabeneh', 'Mathias', 'Elias', 'Brook'])

// const setOfLanguages = new Set(languages)
// console.log(setOfLanguages)

// const companies = new Set()
// companies.add("Facebook")
// companies.add("Apple")
// companies.add("Twitter")
// companies.add("Instagram")
// companies.add("Google")
// companies.add("Amazon")

// console.log(companies)

// companies.delete("Facebook")
// console.log(companies)

const languages = [
  "English",
  "Finnish",
  "English",
  "French",
  "Spanish",
  "English",
  "French",
];
const counts = [];
const langSet = new Set(languages);

for (const l of langSet) {
  const filteredLanguages = languages.filter((language) => language === l);
  console.log(filteredLanguages);
  counts.push({ lang: l, count: filteredLanguages.length });
}
// console.log("he he he shall be coming coming and and and it depends it depends and it must be dependent on on on and and should should should easy".split(" "))

const sentence = "he he he shall be coming coming and and and it depends it depends and it must be dependent on on on and and should should should easy"
const sentenceToArray = sentence.split(" ")
const holder = []

const sentenceToSet = new Set(sentenceToArray)
for (const sentence of sentenceToSet) {
    const filteredSentences = sentenceToArray.filter((sent) => sent === sentence)
    console.log(filteredSentences)
    holder.push({ word: sentence, count: filteredSentences.length})
}
// console.log(holder)

let a = [1, 2, 3, 4, 5]
let b = [3, 4, 5, 6]
let c = [...a, ...b]

console.log(c)

let A = new Set(a)
let B = new Set(b)
let C = new Set(c)