function range(start, stop, step) {
  if (typeof stop == "undefined") {
    // one param defined
    stop = start;
    start = 0;
  }

  if (typeof step == "undefined") {
    step = 1;
  }

  if ((step > 0 && start >= stop) || (step < 0 && start <= stop)) {
    return [];
  }

  var result = [];
  for (var i = start; step > 0 ? i < stop : i > stop; i += step) {
    result.push(i);
  }

  return result;
}
// console.log(range(5, 9))

function sumAll(arr) {
  let sum = 0;
  arr.sort((a, b) => a - b);
  const list = range(arr[0], arr[1] + 1);
  for (let i = 0; i < list.length; i++) {
    sum += list[i];
  }
  return sum;
}

function sumAll1(arr) {
  if (
    arr &&
    Array.isArray(arr) &&
    arr.length === 2 &&
    typeof arr[0] === "number" &&
    typeof arr[1] === "number"
  ) {
    arr.sort((a, b) => a - b);
    let res = arr[0] + arr[1];
    for (let i = arr[0] + 1; i < arr[1]; i++) {
      res += i;
    }
    return res;
  } else {
    return "There is something wrong with the arguments, check and try again!";
  }
}

// console.log(sumAll1([4, 10]))
function sumAll2(arr) {
  if (
    arr &&
    Array.isArray(arr) &&
    arr.length === 2 &&
    typeof arr[0] === "number" &&
    typeof arr[1] === "number"
  ) {
    arr.sort((a, b) => a - b);
    let newArr = [];
    for (let i = arr[0]; i <= arr[1]; i++) {
      newArr.push(i);
    }
    return newArr.reduce((acc, curr) => acc + curr);
  } else {
    return "There is something wrong with the arguments, check and try again!";
  }
}
// console.log(sumAll2([4, 1]))

function frankenSplice(arr1, arr2, n) {
  let combinedArrays = arr2.slice();
  combinedArrays.splice(n, 0, ...arr1);
  return combinedArrays;
}
// console.log(frankenSplice([1,2,3], [4,5,6], 1))

const word = "going to america";
// console.log(word.split(' ').join(""))

function confirmEnding(str, target) {
  const newStr = str.split(" ").join("");
  const strL = newStr.length;
  const targetL = target.length;
  const targetIdx = strL - targetL;
  const subStr = newStr.substring(targetIdx);

  return subStr == target;
}
// console.log(confirmEnding("congratulations in io", "ion"))
// console.log(confirmEnding("I am a test", "st"))

function repeatStringNumTimes(str, num) {
  let repeatedStr = "";
  if (num < 0) {
    return repeatedStr;
  }
  for (let i = 0; i < num; i++) {
    repeatedStr += str;
  }
  return repeatedStr;
}
// console.log(repeatStringNumTimes("congratulations", 3))

function findElement(arr, func) {
  let ele = "";
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i]) === true) {
      ele = arr[i];
      break;
    } else {
      ele = undefined;
    }
  }
  return ele;
}

// console.log(findElement([1,2,4,3,5,6], num => num % 2 === 0))
// console.log(
//   findElement(
//     ["string", "bool", "congratulations"],
//     (str) => str[str.length - 1] === "s"
//   )
// );
// console.log(
//   findElement(
//     ["string", "bool", "congratulations"],
//     (str) => str.split(" ").join("").substring(2) === "ring"
//   )
// );

function booWho(bool) {
  return bool === true || bool === false ? true : false;
}

// console.log(booWho(20 > 30))

function lowestIndToIns(arr, num) {
  arr.push(num);
  arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      return i;
    }
  }
}
// console.log(lowestIndToIns([20, 30, 13, 23], 21))
function lowestIndToIns2(arr, num) {
  const arrSort = arr.sort((a, b) => a - b);
  let index = 0;

  for (let i = 0; i < arrSort.length; i++) {
    if (num <= arrSort[i]) {
      index = i;
      break;
    } else {
      index = i + 1;
    }
  }

  return index;
}
// console.log(lowestIndToIns2([20, 30, 13, 23], 29))

function mutations(arr) {
  const baseStr = arr[0].toLowerCase();
  const targetStr = arr[1].toLowerCase();
  const targetL = targetStr.length;

  for (let i = 0; i < targetL; i++) {
    if (!baseStr.includes(targetStr.charAt(i))) {
      return false;
    }
  }

  return true;
}

// console.log(mutations(["alien", "line"]))

function titleCase(str) {
  const words = str.toLowerCase().split(" ");
  const arrCap = [];

  words.forEach((word) => {
    arrCap.push(word.charAt(0).toUpperCase() + word.slice(1));
  });

  return arrCap.join(" ");
}

// console.log(titleCase("we are celebrating the xmas holiday"))

function bouncer(arr) {
  const falsyArr = ["false", null, "undefined", 0, NaN];
  const newArr = [];

  arr.forEach((item) => {
    if (!falsyArr.includes(item)) {
      newArr.push(item);
    }
  });

  return newArr;
}

// console.log(bouncer(["interesting", "false", null, "undefined", 0, NaN, "accomodate", true]))

const arr1 = [20, 30, 40, 50, 33];
const arr2 = [1, 3, 4, 3, 4, 60];
const allArr = [...arr1, ...arr2];
// console.log(...arr1, ...arr2)
console.log(allArr.indexOf(3))

function diffArray(arr1, arr2) {
  const allArr = [...arr1, ...arr2];
  const symArr = [];

  allArr.forEach((elt) => {
    if (allArr.indexOf(elt) == allArr.lastIndexOf(elt)) {
      symArr.push(elt);
    }
  });

  return symArr;
}

// console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
// console.log(
//   diffArray(
//     ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"],
//     ["diorite", "andesite", "grass", "dirt", "dead shrub"]
//   )
// );
// console.log(
//   diffArray(
//     ["andesite", "grass", "dirt", "pink wool", "dead shrub"],
//     ["diorite", "andesite", "grass", "dirt", "dead shrub"]
//   )
// );

function commonArray(arr1, arr2) {
    const commonArr = []
    for (let item of arr1) {
        for (let element of arr2) {
            if (item === element) {
                commonArr.push(item)
            }
        }
    }
    return commonArr
}

console.log(commonArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
console.log(
  commonArray(
    ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"],
    ["diorite", "andesite", "grass", "dirt", "dead shrub"]
  )
);
console.log(
  commonArray(
    ["andesite", "grass", "dirt", "pink wool", "dead shrub"],
    ["diorite", "andesite", "grass", "dirt", "dead shrub"]
  )
);