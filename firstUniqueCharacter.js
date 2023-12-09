function firstUniqueCharacter(str) {
    let frequency = {}
    for (let letter of str) {
        if (!frequency[letter]) {
            frequency[letter] = 1
        } else {
            frequency[letter] += 1
        }
    }
    for (i = 0; i < str.length; i++) {
        if (frequency[str[i]] === 1) {
            return i
        }
    }
    return -1
}

console.log(firstUniqueCharacter("aammhhddio"))