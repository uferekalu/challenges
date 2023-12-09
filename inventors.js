const inventors = [
  { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
  { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
  { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
  { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
  { first: "Max", last: "Planck", year: 1858, passed: 1947 },
  { first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
  { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
  { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
  { first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
  { first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 },
];

const people = [
  "Bernhard, Sandra",
  "Bethea, Erin",
  "Becker, Carl",
  "Bentsen, Lloyd",
  "Beckett, Samuel",
  "Blake, William",
  "Berger, Ric",
  "Beddoes, Mick",
  "Beethoven, Ludwig",
  "Belloc, Hilaire",
  "Begin, Menachem",
  "Bellow, Saul",
  "Benchley, Robert",
  "Blair, Robert",
  "Benenson, Peter",
  "Benjamin, Walter",
  "Berlin, Irving",
  "Benn, Tony",
  "Benson, Leana",
  "Bent, Silas",
  "Berle, Milton",
  "Berry, Halle",
  "Biko, Steve",
  "Beck, Glenn",
  "Bergman, Ingmar",
  "Black, Elk",
  "Berio, Luciano",
  "Berne, Eric",
  "Berra, Yogi",
  "Berry, Wendell",
  "Bevan, Aneurin",
  "Ben-Gurion, David",
  "Bevel, Ken",
  "Biden, Joseph",
  "Bennington, Chester",
  "Bierce, Ambrose",
  "Billings, Josh",
  "Birrell, Augustine",
  "Blair, Tony",
  "Beecher, Henry",
  "Biondo, Frank",
];

const fifteen_hundred = inventors.filter(
  (inventor) => inventor.year >= 1500 && inventor.year < 1600
);
const fullNames = inventors.map(
  (inventor) => `${inventor.first} ${inventor.last}`
);
const ordered = inventors.sort((a, b) => (a.year > b.year ? 1 : -1));
const totalYear = inventors.reduce((total, inventor) => {
  return total + (inventor.passed - inventor.year);
}, 0);
//   console.table(fifteen_hundred)
// console.table(inventors)
// console.table(fullNames)
// console.table(ordered)
// console.log(totalYear);

// total year for each inventor
for (let inventor of inventors) {
    let totalYear = inventor.passed - inventor.year
    let result = `Total number of years lived by ${inventor.first} ${inventor.last} is ${totalYear}`
    // console.log(result)
}

// sort inventors by number of years lived
const sortByYearsLived = inventors.sort((a, b) => {
    const lastInventor = a.passed - a.year
    const nextInventor = b.passed - b.year
    return lastInventor > nextInventor ? 1: -1
})

// console.log(sortByYearsLived)

// sort the people alphabetically by last name

const sortPoepleByLastName = people.sort((lastOne, nextOne) => {
    const [aLast, aFirst] = lastOne.split(', ')
    const [bLast, bFirst] = nextOne.split(', ')
    return aLast > bLast ? 1: -1
})
console.log(sortPoepleByLastName)