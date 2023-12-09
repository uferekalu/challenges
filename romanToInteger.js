const values = new Map([
  ["I", 1],
  ["V", 5],
  ["X", 10],
  ["L", 50],
  ["C", 100],
  ["D", 500],
  ["M", 1000],
]);

var romanToInt = function (s) {
  let result = 0;
  let current = 0;
  let previous = 0;

  for (const character of s.split("").reverse()) {
    current = values.get(character);
    if (current >= previous) {
      result += current;
    } else {
      result -= current;
    }
    previous = current;
  }
  return result;
};

// Alternatively

var romanToInt1 = function (s) {
  var result = 0;
  if (s === null) {
    result = 0;
  }

  var map1 = new Map();
  map1.set("I", 1);
  map1.set("V", 5);
  map1.set("X", 10);
  map1.set("L", 50);
  map1.set("C", 100);
  map1.set("D", 500);
  map1.set("M", 1000);

  var len = s.length;
  for (var i = 0; i < len; i++) {
    if (map1.get(s.charAt(i)) < map1.get(s.charAt(i + 1))) {
      result -= map1.get(s.charAt(i));
    } else {
      result += map1.get(s.charAt(i));
    }
  }
  return result;
};

console.log(romanToInt1("I"));
console.log(romanToInt1("II"));
console.log(romanToInt("III"));
console.log(romanToInt("IV"));
console.log(romanToInt("V"));
console.log(romanToInt("VI"));
console.log(romanToInt("VII"));
console.log(romanToInt("VIII"));
console.log(romanToInt("IX"));
console.log(romanToInt("X"));
console.log(romanToInt("XI"));
console.log(romanToInt("XII"));
console.log(romanToInt("XIII"));
console.log(romanToInt("XIV"));
console.log(romanToInt("XV"));
console.log(romanToInt("XVI"));
console.log(romanToInt("XVII"));
console.log(romanToInt("XVIII"));
console.log(romanToInt("XIX"));
console.log(romanToInt1("XX"));
