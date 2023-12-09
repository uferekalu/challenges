sentence1 = "Hi all, my name is Tom...I am originally from Australia."
sentence2 = "I need to work very hard to learn more about algorithms in Python!"

function averageWordLength(words) {
    for (var p of "!?,.';") {
        words = words.replace(p, '')
    }
    let arrayOfWords = words.split(" ")
    let totalLength = 0
    for (let word of arrayOfWords) {
        totalLength += word.length
    }
    retur
}

console.log(averageWordLength(sentence1))