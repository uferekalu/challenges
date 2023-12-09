function diffArray(arr1, arr2) {
  const allArr = [...arr1, ...arr2];
  const symArr = [];
  for (let i = 0; i < allArr.length; i++) {
    if (allArr.indexOf(allArr[i]) === allArr.lastIndexOf(allArr[i])) {
      symArr.push(allArr[i]);
    }
  }
  return symArr;
}
// console.log(diffArray([1, 2, 3, 4, 5], [1, 2, 3, 4, 5]))

function commonElementsInArray(arr1, arr2) {
  const result = [];
  for (let item of arr1) {
    for (let ele of arr2) {
      if (item === ele) {
        result.push(item);
      }
    }
  }
  return result;
}
// console.log(commonElementsInArray([1, 2, 3, 5], [1, 2, 3, 4, 5]))

const mutation = (arr) => {
  const baseStr = arr[0];
  const targetStr = arr[1];
  const targetL = targetStr.length;
  for (let i = 0; i < targetL; i++) {
    if (!baseStr.includes(targetStr[i])) {
      return false;
    }
  }
  return true;
};
// console.log(mutation(["alien", "enalid"]))

function sumArr(arr) {
  if (
    arr &&
    Array.isArray(arr) &&
    arr.length === 2 &&
    typeof arr[0] === "number" &&
    typeof arr[1] === "number"
  ) {
    const sortArr = arr.sort((a, b) => a - b);
    let newArr = [];
    for (let i = arr[0]; i <= arr[1]; i++) {
      newArr.push(i);
    }
    return newArr.reduce((acc, num) => acc + num);
  } else {
    return "You supplied invalid data";
  }
}

// console.log(sumArr([5, 1]))

function sumArr2(arr) {
  if (
    arr &&
    Array.isArray(arr) &&
    arr.length === 2 &&
    typeof arr[0] === "number" &&
    typeof arr[1] === "number"
  ) {
    arr.sort((a, b) => a - b);
    let result = arr[0] + arr[1];
    for (let i = arr[0] + 1; i < arr[1]; i++) {
      result += i;
    }
    return result;
  } else {
    return "You supplied invalid data";
  }
}
// console.log(sumArr2([6, 1]))

function range(num1, num2) {
  if (
    (num1 && num2 && typeof num1 === "number" && typeof num2 === "number") ||
    num1 === 0 ||
    num2 == 0
  ) {
    let a = num1;
    let b = num2;
    let result = [];
    if (num2 < num1) {
      num1 = b;
      num2 = a;
    }
    for (let i = num1; i <= num2; i++) {
      result.push(i);
    }
    return result;
  } else {
    return "You supplied invalid data";
  }
}
// console.log(range(-100, 3));

const dataCompetition = [
  ["manUtd", "chelsea"],
  ["liverpool", "manCity"],
  ["arsenal", "tottenham"],
  ["manUtd", "liverpool"],
  ["arsenal", "chelsea"],
  ["manCity", "manUtd"],
  ["manUtd", "astonVilla"],
];
const dataResult = [0, 1, 1, 0, 1, 1, 0];

function tournamentWinner(competitions, results) {
  const pointsTable = new Map();
  const winnerTable = {
    teamName: "",
    totalPoints: -Infinity,
  };
  competitions.forEach((competition, idx) => {
    const winnerTeam = competition[1 - results[idx]];

    let newPoints = pointsTable.get(winnerTeam) || 0;
    newPoints += 3;
    pointsTable.set(winnerTeam, newPoints);

    if (newPoints > winnerTable.totalPoints) {
      (winnerTable.teamName = winnerTeam),
        (winnerTable.totalPoints = newPoints);
    }
  });
  return winnerTable.teamName;
}

// console.log(tournamentWinner(dataCompetition, dataResult))

function isValid(s) {
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    const top = stack[stack.length - 1];
    if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
      stack.push(s[i]);
    } else if (s[i] === ")" && top === "(" && stack.length !== 0) {
      stack.pop();
    } else if (s[i] === "]" && top === "[" && stack.length !== 0) {
      stack.pop();
    } else if (s[i] === "}" && top === "{" && stack.length !== 0) {
      stack.pop();
    } else {
      return false;
    }
  }
  return stack.length === 0;
}
// console.log(isValid("{)"))

function twoSumLessThank(nums, k) {
  nums.sort((a, b) => a - b);
  let left = 0;
  let right = nums.length - 1;
  let max = -1;

  while (left < right) {
    let sum = nums[left] + nums[right];
    if (sum >= k) {
      right--;
      continue;
    }
    if (max < sum) max = sum;
    left++;
  }
  return max;
}
// console.log(twoSumLessThank([1, 8, 23, 23, 33, 34, 54, 75], 6));

function multiplesOf(numbers, multiple) {
  return numbers.filter((number) => number % multiple === 0);
}

// console.log(multiplesOf([2,4,5,6,7,8,4,3,2,10,12,50,55], 2))

const multiplesofFive = (nums) => nums.filter((num) => num % 5 === 0);
// console.log(multiplesofFive([40, 41, 55,60, 33,2,44,30,55,12,34,100,98,95]))

function gradingSystem(grades) {
  let finalGrades = grades.map((grade) => {
    return grade >= 38 && grade % 5 >= 3 ? grade - (grade % 5) + 5 : grade;
  });
  return finalGrades;
}
// console.log(
//   gradingSystem([40, 41, 55, 60, 33, 2, 44, 30, 55, 12, 34, 100, 98, 95])
// );
let numbers = [];
for (let i = 7; i <= 11; i++) {
  numbers.push(i);
}
const values = [8, 9, 10, 1, 2, 3, 4];
const filteredValues = values.filter((val) => numbers.includes(val));
// console.log(filteredValues)

// console.log(new Date().toISOString().slice(0, 19).replace('T', ""))
const url = "https://fakestoreapi.com/products?sort=desc&fruit=mango";

function url_to_json(url) {
  let hash;
  let myJson = {};
  let hashes = url.slice(url.indexOf("?") + 1).split("&");
  for (let i = 0; i < hashes.length; i++) {
    hash = hashes[i].split("=");
    myJson[hash[0]] = hash[1];
  }
  return myJson;
}
// console.log(url_to_json(url))

Object.size = function (obj) {
  let size = 0;
  let key;
  for (key in obj) {
    if (obj.hasOwnProperty(key)) {
      size++;
    }
  }
  return size;
};

const someObj = {
  title: "",
  url: "",
  author: "WisNorCan",
  num_comments: null,
  story_id: null,
  story_title: null,
  story_url: null,
  parent_id: 4839436,
  created_at: 1354054386,
};

// console.log(Object.size(someObj))
// console.log(Object.keys(someObj))
function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

class CustomError extends Error {
  constructor(message) {
    super(message);
    this.name = "Ecommerce";
  }
}
// console.log(validateEmail("@gmail.c"))
const all_fields = [
  "user_email",
  "user_password",
  "id_user_access_level",
  "city",
  "country",
  "state",
];
const required_fields = [
  "user_email",
  "user_phone_number",
  "user_first_name",
  "user_last_name",
  "user_password",
];
const missing_field = required_fields.filter(
  (field) => !all_fields.includes(field)
);
if (missing_field.length > 0) {
  let message = [];
  for (let field of missing_field) {
    message.push(`${field} is missing`);
  }
  // console.log(message)
}

const verification_code = Math.random().toString(36).substring(2, 8);
// console.log(verification_code)

// console.log(new Date().toISOString().slice(2, 19).replace("T","").slice(11).replace(":", ""))
// console.log(typeof parseInt(new Date().toISOString().slice(2, 19).replace("T","").slice(12).replace(":", "")))
// console.log(parseInt(Date.now().toString().slice(10)) + Math.floor(Math.random() * (9-1) + 1))
// console.log(typeof (parseInt(Date.now().toString().slice(10)) + Math.random()))

const data = [
  {
    id: 2,
    identifier: "2b2195798a46c6965f7b507fb9d19946",
    user_first_name: "peace",
    user_last_name: "ufere",
    user_email: "uferepeace@gmail.com",
    user_phone_number: "07032936214",
    user_datetime_created: "2023-01-11 04:52:55",
    user_password:
      "$2b$10$.3pw4xw8.0nDGQHNXruSNOcv3/vRkEK7MyxnSoOaKR/IElidIeq.C",
    id_user_access_level: "",
    country: "Nigeria",
    city: "Lagos",
    address: "",
    gender: "",
  },
];
// if (!data) {
//   console.log("invalid")
// } else {
//   console.log("no")
// }

import path from "path";
import { clearInterval } from "timers";
// console.log(path.join(process.cwd()))

// console.log(new Array(10).fill(2).map((num, idx) => num + idx))

function handleOrderDetails() {
  console.log("order 1");
}

function handleOrderDetails2() {
  console.log("order 2");
}
function handleOrderDetails3() {
  console.log("order 3");
}
function handleOrderDetails4() {
  console.log("order 4");
}
let timeout = null;

const handleOrderProcess = () => {
  var intervalFunctions = [
    handleOrderDetails,
    handleOrderDetails2,
    handleOrderDetails3,
    handleOrderDetails4,
  ];
  let counter = 0;
  const counterValid = counter < intervalFunctions.length;

  var intervalIndex = 0;
  let intervalId;
  while (counterValid) {
    intervalId = setInterval(
      function () {
        intervalFunctions[intervalIndex++ % intervalFunctions.length]();
        counter++;
      },
      1000
    );
  }
  return () => clearInterval(intervalId);
};

// console.log(3 % 4)

handleOrderProcess();
