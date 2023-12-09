const list = [
  "he",
  "he",
  "he",
  "shall",
  "be",
  "coming",
  "coming",
  "and",
  "and",
  "and",
  "it",
  "depends",
  "it",
  "depends",
  "and",
  "it",
  "must",
  "be",
  "dependent",
  "on",
  "on",
  "on",
  "and",
  "and",
  "should",
  "should",
  "should",
  "easy",
];

const sentenceToSet = new Set(list);
console.log(sentenceToSet);
const counts = [];
for (const sentence of sentenceToSet) {
  const filteredSet = list.filter((sent) => sent === sentence);
  console.log(filteredSet);
  counts.push({ word: sentence, count: filteredSet.length });
}
console.log(counts);
