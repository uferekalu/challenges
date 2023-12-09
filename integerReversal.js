function integerReversal(num) {
  let intToString = num.toString();
  if (intToString[0] === "-") {
    return -Number(
      intToString.substring(1, intToString.length).split("").reverse().join("")
    );
  } else {
    return Number(intToString.split("").reverse().join(""));
  }
}

console.log(integerReversal(-11123));

// console.log("1234".split("").reverse().join(""))
