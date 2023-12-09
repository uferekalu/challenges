const arr1 = [2, 3, 4, 50];
const arr2 = [3, 4, 2, 6, 30];
let combinedArrays = arr2.slice();
combinedArrays.splice(1, 0, ...arr1);
// console.log(combinedArrays)

const employeesData = [
  {
    id: 1,
    firstName: "Susan",
    lastName: "Jordon",
    email: "susan@example.com",
    salary: "95000",
    date: "2019-04-11",
  },
  {
    id: 2,
    firstName: "Adrienne",
    lastName: "Doak",
    email: "adrienne@example.com",
    salary: "80000",
    date: "2019-04-17",
  },
  {
    id: 3,
    firstName: "Rolf",
    lastName: "Hegdal",
    email: "rolf@example.com",
    salary: "79000",
    date: "2019-05-01",
  },
  {
    id: 4,
    firstName: "Kent",
    lastName: "Rosner",
    email: "kent@example.com",
    salary: "56000",
    date: "2019-05-03",
  },
  {
    id: 5,
    firstName: "Arsenio",
    lastName: "Grant",
    email: "arsenio@example.com",
    salary: "65000",
    date: "2019-06-13",
  },
  {
    id: 6,
    firstName: "Laurena",
    lastName: "Lurie",
    email: "laurena@example.com",
    salary: "120000",
    date: "2019-07-30",
  },
  {
    id: 7,
    firstName: "George",
    lastName: "Tallman",
    email: "george@example.com",
    salary: "90000",
    date: "2019-08-15",
  },
  {
    id: 8,
    firstName: "Jesica",
    lastName: "Watlington",
    email: "jesica@example.com",
    salary: "60000",
    date: "2019-10-10",
  },
  {
    id: 9,
    firstName: "Matthew",
    lastName: "Warren",
    email: "matthew@example.com",
    salary: "71000",
    date: "2019-10-15",
  },
  {
    id: 10,
    firstName: "Lyndsey",
    lastName: "Follette",
    email: "lyndsey@example.com",
    salary: "110000",
    date: "2020-01-15",
  },
];

const tenth_employee = {
  id: 10,
  firstName: "Ufere",
  lastName: "Kalu",
  email: "lyndsey@example.com",
  salary: "110000",
  date: "2020-01-15",
};
const lastData = {
  id: 11,
  firstName: "Lyndsey",
  lastName: "Follette",
  email: "lyndsey@example.com",
  salary: "110000",
  date: "2020-01-15",
};
const newEmployeesData = employeesData.slice();
newEmployeesData.splice(9, 0, tenth_employee);
newEmployeesData.splice(newEmployeesData.length - 1, 1, lastData);

// console.log(newEmployeesData);

// console.log("he is coming to pick you".split(" ").join("").substring(4))

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
// console.log(findElement([29, 43, 53, 20], num => num % 2 === 1))
// console.log(findElement(["he", "is", "coming", "now"], str => str[str.length - 1] === "w"))

const fruits = ["banana", "cherry", "pineapple", "plantain", "orange", "apple"];
const fruit = ["blackberry"];

function countLetters(arr) {
  let table = {};
  if (arr && Array.isArray(arr)) {
    for (let i = 0; i < arr.length; i++) {
      let count = {};
      for (const item of arr[i]) {
        if (count.hasOwnProperty(item)) {
          count[item]++;
        } else {
          count[item] = 1;
        }
      }
      table[arr[i]] = count;
    }
  } else {
    return "You must supply array as paramter";
  }
  return table;
}
function countLetters2(arr) {
  let table = {};
  if (arr && Array.isArray(arr)) {
    for (let i = 0; i < arr.length; i++) {
      let count = {};
      for (let j = 0; j < arr[i].length; j++) {
        if (count.hasOwnProperty(arr[i][j])) {
          count[arr[i][j]]++;
        } else {
          count[arr[i][j]] = 1;
        }
      }
      table[arr[i]] = count;
    }
  } else {
    return "You must supply array as paramter";
  }
  return table;
}
// console.log(countLetters2(fruits));
// console.log(countLetters2(fruit));
// for (let i = 0; i < "banana".length; i++) {
//     console.log("banana"[i])
// }

function lowestIndexToInsert(arr, num) {
  arr.push(num);
  arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      return i;
    }
  }
}
// console.log(lowestIndexToInsert([1,3,2,4,5,6], 4))

function mutations(arr) {
  const baseStr = arr[0].toLowerCase();
  const targetStr = arr[1].toLowerCase();
  const targetStrL = targetStr.length;

  for (let i = 0; i < targetStrL; i++) {
    if (!baseStr.includes(targetStr.charAt(i))) {
      return false;
    }
  }
  return true;
}
// console.log(mutations(["hello", "ollehw"]))

function convertToTitleCase(str) {
  const words = str.toLowerCase().split(" ");
  let arrCap = [];
  words.forEach((word) => {
    arrCap.push(word.charAt(0).toUpperCase() + word.slice(1));
  });
  return arrCap.join(" ");
}
// console.log(convertToTitleCase("we are celebrating the xmas holiday"));

function bouncer(arr) {
  const falsyArr = [false, 0, null, undefined, NaN];
  const result = [];
  arr.forEach((item) => {
    if (!falsyArr.includes(item)) {
      result.push(item);
    }
  });
  return result;
}
// console.log(bouncer(["interesting", "false", null, "undefined", 0, NaN, "accomodate", true]))

function diffArray(arr1, arr2) {
  const allArr = [...arr1, ...arr2];
  const symArr = [];

  allArr.forEach((item) => {
    if (allArr.indexOf(item) == allArr.lastIndexOf(item)) {
      symArr.push(item);
    }
  });
  return symArr;
}
// console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
// console.log(
//   diffArray(
//     ["andesite", "grass", "dirt", "pink wool", "dead shrub"],
//     ["diorite", "andesite", "grass", "dirt", "dead shrub"]
//   )
// );

function commonArrr(arr1, arr2) {
  const result = [];
  for (let item of arr1) {
    for (let element of arr2) {
      if (item === element) {
        result.push(item);
      }
    }
  }
  return result;
}
// console.log(commonArrr([1, 2, 3, 5], [1, 2, 3, 4, 5]));
// console.log(
//   commonArrr(
//     ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"],
//     ["diorite", "andesite", "grass", "dirt", "dead shrub"]
//   )
// );
// console.log(
//   commonArrr(
//     ["andesite", "grass", "dirt", "pink wool", "dead shrub"],
//     ["diorite", "andesite", "grass", "dirt", "dead shrub"]
//   )
// );

// [1, 2, 3, 4][(1, 3, 4)];

function isValidSequence(array, sequence) {
  let seqIdx = 0;
  let i = 0;

  while (i < array.length && seqIdx < sequence.length) {
    const arrElement = array[i];
    const seqElement = sequence[seqIdx];
    if (arrElement === seqElement) {
      seqIdx++;
    }
    i++;
  }
  return seqIdx === sequence.length;
}

// console.log(isValidSequence([1, 2, 3, 4], [1, 4]));
const numArr = [1,2,3,4]
// numArr.splice(1, 0, 2)
// console.log(numArr.splice(1, 1))
let done = false;
// console.log(!done)

console.log(new Map().get("manutd") || 0)
