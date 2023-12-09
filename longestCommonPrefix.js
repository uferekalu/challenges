function longestCommonPrefix(words) {
    if (!words[0] || words.length === 1) return words[0] || ""
    let i = 0

    while (words[0][i] && words.every((word) => word[i] === words[0][i])) {
        i++
    }

    return words[0].substring(0, i)
}

console.log(1, longestCommonPrefix([]));
console.log(2, longestCommonPrefix([""]));
console.log(3, longestCommonPrefix(["abc"]));
console.log(4, longestCommonPrefix(["abcdefgh", "abcde", "abe"]));
console.log(5, longestCommonPrefix(["abc", "abc", "abc"]));
console.log(6, longestCommonPrefix(["abc", "abcde", "xyz"]));