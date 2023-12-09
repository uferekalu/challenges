const users = [];
function addUser(id, name, room) {
  name = name.trim().toLowerCase();
  room = room.trim().toLowerCase();
  const existingUser = users.find(
    (user) => user.room == room && user.name === name
  );

  if (!name || !room) return { error: "Username and room are required" };
  if (existingUser) return { error: "Username is taken" };

  const user = {
    id,
    name,
    room,
  };
  users.push(user);
  return {
    user,
  };
}

function removeUser(id) {
  const index = users.findIndex((user) => user.id === id);
  if (index !== -1) {
    return users.splice(index, 1)[0];
  }
}

function getUser(id) {
  return users.find((user) => user.id === id);
}

function usersInRoom(room) {
  return users.filter((user) => user.room === room);
}
// console.log(addUser(1, "Ufere Kalu", "room 319"))
// console.log(addUser(2, "Emmaculate Beatrice", "room 319"))
// console.log(addUser(3, "Emeke Udo", "room 319"))
// console.log(addUser(4, "Peace Emmanuel", "room 400"))
// console.log(addUser(5, "Beatrice Emeka", "room 401"))
// console.log(addUser(6, "Henry Okala", "room 350"))
// console.log(users)
// // console.log(removeUser(4))
// console.log(getUser(3))
// console.log(usersInRoom("room 319"))
// console.log(users)

// console.log((+new Date() + Math.floor(Math.random() * 999999)).toString(36))
var items = [
  {
    id: 0,
    name: "",
    description: "",
    price: "1.00",
    quantity: 1,
  },
  {
    id: 0,
    name: "",
    description: "",
    price: "1.00",
    quantity: 1,
  },
];
// console.log(items.slice().length)
const randString =
  +new Date() + Math.floor(Math.random() * 999999).toString(36);
// console.log(randString)
// setTimeout(() => {
//     console.log("print")
// }, 50)

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

function findEmployee(employees, id) {
  const [result] = employees.filter((employee) => employee.id === id);
  return result;
}
//   console.log(findEmployee(employeesData, 1))

const newEmployee = {
  id: 10,
  firstName: "James",
  lastName: "John",
  email: "jamesjohn@gmail.com",
  salary: "100000",
  date: "2022-12-17",
};

function editEmployee(data, id) {
  for (let i = 0; i < data.length; i++) {
    if (data[i].id === id) {
      data.splice(i, 1, newEmployee);
    }
  }
  return data;
}

// console.log(editEmployee(employeesData, 10))
// console.log(employeesData.splice(0, 4))

const border_size = 100;
const adjList = new Map();
for (let i = 1; i <= border_size; i++) {
  let neighbors = border_size - i >= 6 ? 6 : border_size - i;
  adjList.set(
    i,
    new Set(new Array(neighbors).fill(i + 1).map((val, idx) => val + idx))
  );
}
// console.log(adjList)
// console.log(new Array(6).fill(3).map((item) => item))
// console.log(new Set(new Array(6).fill(2).map((val, idx) => val + idx)))
// console.log(new Set(new Array(6).fill(2).map((val, idx) => val + idx)))

let i = 0;
const someMap = new Map();
while (i < 6) {
  someMap.set(
    i,
    new Set(new Array(6).fill(i + 1).map((val, idx) => val + idx))
  );
  i++;
}
// console.log(someMap)
const data = {
  order: {
    hat: {
      quantity: 14,
      price: 8,
    },
    cake: {
      quantity: 9,
      price: 3,
    },
    ice: {
      quantity: 10,
      price: 5,
    },
    candy: {
      quantity: 6,
      price: 8,
    },
  },
};
// console.log(data.order)
function converter(order) {
  return Object.keys(order).map((item) => {
    const itemDetails = order[item];
    return {
      item: item,
      quantity: itemDetails.quantity,
      price: itemDetails.price,
      revenue: itemDetails.price * itemDetails.quantity,
    };
  });
}

// console.log(converter(data.order))
const invaliduser = {
  email: "",
  name: "testuser",
  password: "fishcalory",
};

// console.log(Object.assign(invaliduser));
// console.log("word".charAt(2))
const name = Symbol("come");
const person = {
  [name]: "Ufere",
};
// console.log(person)
const re =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
// console.log("dekalusha@yahoo.co".match(re))
const headers = {
  "user-key": "Bearer ii889djkwiuqjhhwu7773893hbwhyyd89w93yhwhw939",
  name: "ufere goodnews",
};
// console.log(headers['user-key'])
import jwt from "jsonwebtoken";

const data1 = {
  name: "ufere kalu",
  occupation: "programmer",
};

function generateToken(customerData) {
  const token = jwt.sign({ customerData }, "secret", {
    expiresIn: "1d",
  });
  return "Bearer " + token;
}
// console.log(generateToken(data1))

function verifyToken(token) {
  if (!token || token.trim() === "") {
    return "no token supplied";
  }
  if (token.split(" ")[0] !== "Bearer") {
    return "invalid token";
  }
  const verifiedToken = token.split(" ")[1];
  jwt.verify(verifiedToken, "secret", (err, decoded) => {
    if (err) {
      return "Error occured";
    }
    return decoded
  });
}

// console.log(
//   verifyToken(
//     "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjdXN0b21lckRhdGEiOnsibmFtZSI6InVmZXJlIGthbHUiLCJvY2N1cGF0aW9uIjoicHJvZ3JhbW1lciJ9LCJpYXQiOjE2NzIzMTE2OTksImV4cCI6MTY3MjM5ODA5OX0.FHkjiyoiAzekLld-3BOJZsrbC765EVWs73tYwEch0xQ"
//   )
// );

// console.log(Buffer.alloc(20))
// console.log(Buffer.from('nodejsera').compare(Buffer.from('ufere')))
// try {
//   const m = 1
//   const n = m + z
//   console.log(n)
// } catch (err) {
//   console.log(err.name)
// }

const user = {
  hello: 'welcome to turing',
  sayWelcome() {
    console.log(this.hello)
  }
}
// setTimeout(user.sayWelcome.bind(user), 1000)
// console.log(1)
// setTimeout(() => {
//   console.log(2)
// }, 0)
// Promise.resolve(3).then(console.log)
// console.log(4)



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

// console.log(range(-1, 20))

// console.log([...new Array(6)].map(() => 6))
// console.log(void 0)

function getInitials(string) {
  return string.match(/\b(\w)/g).slice(0, 2)//.join('').toUpperCase()
}
// console.log(getInitials("ufere"))
// console.log("https://jsonmock.hackerrank.com/api/articles?page="+2)

// console.log(new Date("2019-10-21"))

function oddNumbers(l, r) {
  let result = []
  while (l <= r) {
    result.push(l)
    l++
  }
  return result.filter((n) => n % 2)
}

// console.log(oddNumbers(2, 9))

const catalogsList = [
  {
    thumb: "image1",
    image: "image1"
  },
  {
    thumb: "image2",
    image: "image2"
  },
  {
    thumb: "image3",
    image: "image3"
  },
  {
    thumb: "image4",
    image: "image4"
  }
]
// console.log(catalogsList.slice(1).concat(catalogsList[0]))
// console.log(new Array(catalogsList[3]).concat(catalogsList.slice(0, 3)))
const STUDENTS = [
  {
    name: 'John',
    validityDate: '2030-12-30'
  },
  {
    name: 'Jane',
    validityDate: '2030-05-25'
  },
  {
    name: 'Adam',
    validityDate: '2030-11-11'
  },
  {
    name: 'Bonnie',
    validityDate: '2008-11-11'
  },
  {
    name: 'Dhilip',
    validityDate: '2030-12-30'
  },
  {
    name: 'Falude',
    validityDate: '2020-05-25'
  },
  {
    name: 'Damiyen',
    validityDate: '2030-11-11'
  },
  {
    name: 'Talisk',
    validityDate: '2023-11-11'
  }
];

function delStudent(id) {
  let newStudent = STUDENTS.slice()
  for (let i = 0; i < newStudent.length; i++) {
    if (i === id) {
      newStudent.splice(i, 1)
    }
  }
  return newStudent
}
// console.log(delStudent(0))
const ae = STUDENTS.filter((student) => student.name.toLowerCase() === "TALISK".toLowerCase())
function checkValidity(joiningDate, validityDate) {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const [year, month, day] = joiningDate.split('-');
  const [yyyy, mm, dd] = validityDate.split('-');
  const maxValid = new Date(yyyy, mm - 1, dd);
  const selected = new Date(year, month - 1, day);
  return (maxValid >= selected) && (maxValid >= today);
}

// console.log(ae[0].validityDate)
// console.log(checkValidity("2024-10-11", ae[0].validityDate))

// console.log(["walk dog", "walk"].join(", "))

let dog = {
  run: true,
  leg: 4,
  sayDog() {
    return `This dog has ${this.leg} legs`
  }
}
// console.log(dog.sayDog())

function Dog() {
  this.color = "dark brown",
    this.leg = 4,
    this.ear = 2
}

let hound = new Dog()
console.log(hound)
console.log(typeof hound)

function House(numOfBedrooms) {
  this.numOfBedrooms = numOfBedrooms
}

let myHouse = new House(5)
// console.log(myHouse instanceof House)

function Bird(name) {
  this.name = name
  this.legs = 4
}

let canary = new Bird("tweere")
let ownProps = []
for (let ownProperties in canary) {
  if (canary.hasOwnProperty(ownProperties)) {
    ownProps.push(ownProperties)
  }
}
// console.log(ownProps)

function Cat(name) {
  this.name = name
}
Cat.prototype.numLegs = 4
let beagle = new Cat("Tomory")

// console.log(beagle.numLegs)

function plusSign(arr) {
  let posNums = []
  let negNums = []
  let zeroNums = []
  for (let i = 0; i < arr.length; i++) {
    if (Math.sign(arr[i]) === 1) {
      posNums.push(arr[i])
    } else if (Math.sign(arr[i]) === -1) {
      negNums.push(arr[i])
    } else {
      zeroNums.push(arr[i])
    }
  }
  const posRatio = (posNums.length / arr.length).toFixed(6)
  const negRatio = (negNums.length / arr.length).toFixed(6)
  const zeroRatio = (zeroNums.length / arr.length).toFixed(6)

  console.log(posRatio)
  console.log(negRatio)
  console.log(zeroRatio)

}
// plusSign([-1, -2, 1, 3, 4, 0, 0])

function minMaxSum(arr) {
  const sortedArr = arr.sort((a, b) => a - b)
  let minVal = 0
  let maxVal = 0
  for (let i = 0; i < sortedArr.length - 1; i++) {
    minVal += sortedArr[i]
  }
  for (let i = 1; i < sortedArr.length; i++) {
    maxVal += sortedArr[i]
  }
  console.log(minVal, maxVal)
}

// console.log(minMaxSum([1,9,3,6,7,8,19,2,4]))
function timeConversion(s) {
  const time = s.slice(0, 8).split(":")
  arr[0] = (s.indexOf("PM") > -1) ?
    (time[0] == 12 ? "12" : Number(time[0]) + 12) :
    (time[0] == 12 ? "00" : time[0])
  return time.join(":")
}

const models = [
  {
    "id": 1,
    "make_id": 1,
    "name": "******* (hidden)",
    "make": {
      "id": 1,
      "name": "Acura"
    },
    "__message": "NOTE: Data is limited to `2020` for non-paying users. Search for 2020 vehicles or subscribe to unlock this data."
  },
  {
    "id": 2,
    "make_id": 1,
    "name": "*** (hidden)",
    "make": {
      "id": 1,
      "name": "Acura"
    },
    "__message": "NOTE: Data is limited to `2020` for non-paying users. Search for 2020 vehicles or subscribe to unlock this data."
  },
  {
    "id": 3,
    "make_id": 2,
    "name": "** (hidden)",
    "make": {
      "id": 2,
      "name": "Audi"
    },
    "__message": "NOTE: Data is limited to `2020` for non-paying users. Search for 2020 vehicles or subscribe to unlock this data."
  },
  {
    "id": 4,
    "make_id": 2,
    "name": "****** (hidden)",
    "make": {
      "id": 2,
      "name": "Audi"
    },
    "__message": "NOTE: Data is limited to `2020` for non-paying users. Search for 2020 vehicles or subscribe to unlock this data."
  },
  {
    "id": 5,
    "make_id": 2,
    "name": "******** (hidden)",
    "make": {
      "id": 2,
      "name": "Audi"
    },
    "__message": "NOTE: Data is limited to `2020` for non-paying users. Search for 2020 vehicles or subscribe to unlock this data."
  },
  {
    "id": 6,
    "make_id": 2,
    "name": "** (hidden)",
    "make": {
      "id": 2,
      "name": "Audi"
    },
    "__message": "NOTE: Data is limited to `2020` for non-paying users. Search for 2020 vehicles or subscribe to unlock this data."
  },
  {
    "id": 7,
    "make_id": 2,
    "name": "** (hidden)",
    "make": {
      "id": 2,
      "name": "Audi"
    },
    "__message": "NOTE: Data is limited to `2020` for non-paying users. Search for 2020 vehicles or subscribe to unlock this data."
  },
  {
    "id": 8,
    "make_id": 2,
    "name": "** (hidden)",
    "make": {
      "id": 2,
      "name": "Audi"
    },
    "__message": "NOTE: Data is limited to `2020` for non-paying users. Search for 2020 vehicles or subscribe to unlock this data."
  },
  {
    "id": 9,
    "make_id": 3,
    "name": "******** (hidden)",
    "make": {
      "id": 3,
      "name": "BMW"
    },
    "__message": "NOTE: Data is limited to `2020` for non-paying users. Search for 2020 vehicles or subscribe to unlock this data."
  },
  {
    "id": 10,
    "make_id": 3,
    "name": "******** (hidden)",
    "make": {
      "id": 3,
      "name": "BMW"
    },
    "__message": "NOTE: Data is limited to `2020` for non-paying users. Search for 2020 vehicles or subscribe to unlock this data."
  },
  {
    "id": 11,
    "make_id": 3,
    "name": "******************* (hidden)",
    "make": {
      "id": 3,
      "name": "BMW"
    },
    "__message": "NOTE: Data is limited to `2020` for non-paying users. Search for 2020 vehicles or subscribe to unlock this data."
  },
  {
    "id": 12,
    "make_id": 3,
    "name": "******** (hidden)",
    "make": {
      "id": 3,
      "name": "BMW"
    },
    "__message": "NOTE: Data is limited to `2020` for non-paying users. Search for 2020 vehicles or subscribe to unlock this data."
  },
  {
    "id": 13,
    "make_id": 3,
    "name": "******************* (hidden)",
    "make": {
      "id": 3,
      "name": "BMW"
    },
    "__message": "NOTE: Data is limited to `2020` for non-paying users. Search for 2020 vehicles or subscribe to unlock this data."
  },
  {
    "id": 14,
    "make_id": 3,
    "name": "******************** (hidden)",
    "make": {
      "id": 3,
      "name": "BMW"
    },
    "__message": "NOTE: Data is limited to `2020` for non-paying users. Search for 2020 vehicles or subscribe to unlock this data."
  },
  {
    "id": 15,
    "make_id": 3,
    "name": "** (hidden)",
    "make": {
      "id": 3,
      "name": "BMW"
    },
    "__message": "NOTE: Data is limited to `2020` for non-paying users. Search for 2020 vehicles or subscribe to unlock this data."
  },
  {
    "id": 16,
    "make_id": 3,
    "name": "** (hidden)",
    "make": {
      "id": 3,
      "name": "BMW"
    },
    "__message": "NOTE: Data is limited to `2020` for non-paying users. Search for 2020 vehicles or subscribe to unlock this data."
  },
  {
    "id": 17,
    "make_id": 4,
    "name": "******* (hidden)",
    "make": {
      "id": 4,
      "name": "Buick"
    },
    "__message": "NOTE: Data is limited to `2020` for non-paying users. Search for 2020 vehicles or subscribe to unlock this data."
  },
  {
    "id": 18,
    "make_id": 4,
    "name": "********* (hidden)",
    "make": {
      "id": 4,
      "name": "Buick"
    },
    "__message": "NOTE: Data is limited to `2020` for non-paying users. Search for 2020 vehicles or subscribe to unlock this data."
  },
  {
    "id": 19,
    "make_id": 4,
    "name": "******** (hidden)",
    "make": {
      "id": 4,
      "name": "Buick"
    },
    "__message": "NOTE: Data is limited to `2020` for non-paying users. Search for 2020 vehicles or subscribe to unlock this data."
  },
  {
    "id": 20,
    "make_id": 5,
    "name": "*** (hidden)",
    "make": {
      "id": 5,
      "name": "Cadillac"
    },
    "__message": "NOTE: Data is limited to `2020` for non-paying users. Search for 2020 vehicles or subscribe to unlock this data."
  },
  {
    "id": 21,
    "make_id": 5,
    "name": "*** (hidden)",
    "make": {
      "id": 5,
      "name": "Cadillac"
    },
    "__message": "NOTE: Data is limited to `2020` for non-paying users. Search for 2020 vehicles or subscribe to unlock this data."
  },
  {
    "id": 22,
    "make_id": 5,
    "name": "******** (hidden)",
    "make": {
      "id": 5,
      "name": "Cadillac"
    },
    "__message": "NOTE: Data is limited to `2020` for non-paying users. Search for 2020 vehicles or subscribe to unlock this data."
  },
  {
    "id": 23,
    "make_id": 5,
    "name": "************ (hidden)",
    "make": {
      "id": 5,
      "name": "Cadillac"
    },
    "__message": "NOTE: Data is limited to `2020` for non-paying users. Search for 2020 vehicles or subscribe to unlock this data."
  },
  {
    "id": 24,
    "make_id": 5,
    "name": "***** (hidden)",
    "make": {
      "id": 5,
      "name": "Cadillac"
    },
    "__message": "NOTE: Data is limited to `2020` for non-paying users. Search for 2020 vehicles or subscribe to unlock this data."
  },
  {
    "id": 25,
    "make_id": 5,
    "name": "*** (hidden)",
    "make": {
      "id": 5,
      "name": "Cadillac"
    },
    "__message": "NOTE: Data is limited to `2020` for non-paying users. Search for 2020 vehicles or subscribe to unlock this data."
  },
  {
    "id": 26,
    "make_id": 5,
    "name": "*** (hidden)",
    "make": {
      "id": 5,
      "name": "Cadillac"
    },
    "__message": "NOTE: Data is limited to `2020` for non-paying users. Search for 2020 vehicles or subscribe to unlock this data."
  },
  {
    "id": 27,
    "make_id": 5,
    "name": "*** (hidden)",
    "make": {
      "id": 5,
      "name": "Cadillac"
    },
    "__message": "NOTE: Data is limited to `2020` for non-paying users. Search for 2020 vehicles or subscribe to unlock this data."
  },
  {
    "id": 28,
    "make_id": 6,
    "name": "******** (hidden)",
    "make": {
      "id": 6,
      "name": "Chevrolet"
    },
    "__message": "NOTE: Data is limited to `2020` for non-paying users. Search for 2020 vehicles or subscribe to unlock this data."
  },
  {
    "id": 29,
    "make_id": 6,
    "name": "******* (hidden)",
    "make": {
      "id": 6,
      "name": "Chevrolet"
    },
    "__message": "NOTE: Data is limited to `2020` for non-paying users. Search for 2020 vehicles or subscribe to unlock this data."
  },
  {
    "id": 30,
    "make_id": 6,
    "name": "******** (hidden)",
    "make": {
      "id": 6,
      "name": "Chevrolet"
    },
    "__message": "NOTE: Data is limited to `2020` for non-paying users. Search for 2020 vehicles or subscribe to unlock this data."
  },
  {
    "id": 31,
    "make_id": 6,
    "name": "******** (hidden)",
    "make": {
      "id": 6,
      "name": "Chevrolet"
    },
    "__message": "NOTE: Data is limited to `2020` for non-paying users. Search for 2020 vehicles or subscribe to unlock this data."
  },
  {
    "id": 32,
    "make_id": 6,
    "name": "***** (hidden)",
    "make": {
      "id": 6,
      "name": "Chevrolet"
    },
    "__message": "NOTE: Data is limited to `2020` for non-paying users. Search for 2020 vehicles or subscribe to unlock this data."
  },
  {
    "id": 33,
    "make_id": 6,
    "name": "*********** (hidden)",
    "make": {
      "id": 6,
      "name": "Chevrolet"
    },
    "__message": "NOTE: Data is limited to `2020` for non-paying users. Search for 2020 vehicles or subscribe to unlock this data."
  },
  {
    "id": 34,
    "make_id": 6,
    "name": "******** (hidden)",
    "make": {
      "id": 6,
      "name": "Chevrolet"
    },
    "__message": "NOTE: Data is limited to `2020` for non-paying users. Search for 2020 vehicles or subscribe to unlock this data."
  },
  {
    "id": 35,
    "make_id": 7,
    "name": "*** (hidden)",
    "make": {
      "id": 7,
      "name": "Genesis"
    },
    "__message": "NOTE: Data is limited to `2020` for non-paying users. Search for 2020 vehicles or subscribe to unlock this data."
  },
  {
    "id": 36,
    "make_id": 7,
    "name": "**** (hidden)",
    "make": {
      "id": 7,
      "name": "Genesis"
    },
    "__message": "NOTE: Data is limited to `2020` for non-paying users. Search for 2020 vehicles or subscribe to unlock this data."
  },
  {
    "id": 37,
    "make_id": 7,
    "name": "**** (hidden)",
    "make": {
      "id": 7,
      "name": "Genesis"
    },
    "__message": "NOTE: Data is limited to `2020` for non-paying users. Search for 2020 vehicles or subscribe to unlock this data."
  },
  {
    "id": 38,
    "make_id": 7,
    "name": "**** (hidden)",
    "make": {
      "id": 7,
      "name": "Genesis"
    },
    "__message": "NOTE: Data is limited to `2020` for non-paying users. Search for 2020 vehicles or subscribe to unlock this data."
  },
  {
    "id": 39,
    "make_id": 8,
    "name": "****** (hidden)",
    "make": {
      "id": 8,
      "name": "GMC"
    },
    "__message": "NOTE: Data is limited to `2020` for non-paying users. Search for 2020 vehicles or subscribe to unlock this data."
  },
  {
    "id": 40,
    "make_id": 9,
    "name": "**** (hidden)",
    "make": {
      "id": 9,
      "name": "Honda"
    },
    "__message": "NOTE: Data is limited to `2020` for non-paying users. Search for 2020 vehicles or subscribe to unlock this data."
  },
  {
    "id": 41,
    "make_id": 9,
    "name": "******* (hidden)",
    "make": {
      "id": 9,
      "name": "Honda"
    },
    "__message": "NOTE: Data is limited to `2020` for non-paying users. Search for 2020 vehicles or subscribe to unlock this data."
  },
  {
    "id": 42,
    "make_id": 10,
    "name": "******* (hidden)",
    "make": {
      "id": 10,
      "name": "Hyundai"
    },
    "__message": "NOTE: Data is limited to `2020` for non-paying users. Search for 2020 vehicles or subscribe to unlock this data."
  },
  {
    "id": 43,
    "make_id": 10,
    "name": "******** (hidden)",
    "make": {
      "id": 10,
      "name": "Hyundai"
    },
    "__message": "NOTE: Data is limited to `2020` for non-paying users. Search for 2020 vehicles or subscribe to unlock this data."
  },
  {
    "id": 44,
    "make_id": 10,
    "name": "******** (hidden)",
    "make": {
      "id": 10,
      "name": "Hyundai"
    },
    "__message": "NOTE: Data is limited to `2020` for non-paying users. Search for 2020 vehicles or subscribe to unlock this data."
  },
  {
    "id": 45,
    "make_id": 11,
    "name": "*** (hidden)",
    "make": {
      "id": 11,
      "name": "INFINITI"
    },
    "__message": "NOTE: Data is limited to `2020` for non-paying users. Search for 2020 vehicles or subscribe to unlock this data."
  },
  {
    "id": 46,
    "make_id": 11,
    "name": "**** (hidden)",
    "make": {
      "id": 11,
      "name": "INFINITI"
    },
    "__message": "NOTE: Data is limited to `2020` for non-paying users. Search for 2020 vehicles or subscribe to unlock this data."
  },
  {
    "id": 47,
    "make_id": 12,
    "name": "****** (hidden)",
    "make": {
      "id": 12,
      "name": "Jaguar"
    },
    "__message": "NOTE: Data is limited to `2020` for non-paying users. Search for 2020 vehicles or subscribe to unlock this data."
  },
  {
    "id": 48,
    "make_id": 12,
    "name": "****** (hidden)",
    "make": {
      "id": 12,
      "name": "Jaguar"
    },
    "__message": "NOTE: Data is limited to `2020` for non-paying users. Search for 2020 vehicles or subscribe to unlock this data."
  },
  {
    "id": 49,
    "make_id": 12,
    "name": "****** (hidden)",
    "make": {
      "id": 12,
      "name": "Jaguar"
    },
    "__message": "NOTE: Data is limited to `2020` for non-paying users. Search for 2020 vehicles or subscribe to unlock this data."
  },
  {
    "id": 50,
    "make_id": 12,
    "name": "****** (hidden)",
    "make": {
      "id": 12,
      "name": "Jaguar"
    },
    "__message": "NOTE: Data is limited to `2020` for non-paying users. Search for 2020 vehicles or subscribe to unlock this data."
  },
  {
    "id": 51,
    "make_id": 12,
    "name": "** (hidden)",
    "make": {
      "id": 12,
      "name": "Jaguar"
    },
    "__message": "NOTE: Data is limited to `2020` for non-paying users. Search for 2020 vehicles or subscribe to unlock this data."
  },
  {
    "id": 52,
    "make_id": 13,
    "name": "******** (hidden)",
    "make": {
      "id": 13,
      "name": "Kia"
    },
    "__message": "NOTE: Data is limited to `2020` for non-paying users. Search for 2020 vehicles or subscribe to unlock this data."
  },
  {
    "id": 53,
    "make_id": 13,
    "name": "***** (hidden)",
    "make": {
      "id": 13,
      "name": "Kia"
    },
    "__message": "NOTE: Data is limited to `2020` for non-paying users. Search for 2020 vehicles or subscribe to unlock this data."
  },
  {
    "id": 54,
    "make_id": 13,
    "name": "** (hidden)",
    "make": {
      "id": 13,
      "name": "Kia"
    },
    "__message": "NOTE: Data is limited to `2020` for non-paying users. Search for 2020 vehicles or subscribe to unlock this data."
  },
  {
    "id": 55,
    "make_id": 13,
    "name": "****** (hidden)",
    "make": {
      "id": 13,
      "name": "Kia"
    },
    "__message": "NOTE: Data is limited to `2020` for non-paying users. Search for 2020 vehicles or subscribe to unlock this data."
  },
  {
    "id": 56,
    "make_id": 13,
    "name": "**** (hidden)",
    "make": {
      "id": 13,
      "name": "Kia"
    },
    "__message": "NOTE: Data is limited to `2020` for non-paying users. Search for 2020 vehicles or subscribe to unlock this data."
  },
  {
    "id": 57,
    "make_id": 13,
    "name": "******** (hidden)",
    "make": {
      "id": 13,
      "name": "Kia"
    },
    "__message": "NOTE: Data is limited to `2020` for non-paying users. Search for 2020 vehicles or subscribe to unlock this data."
  },
  {
    "id": 58,
    "make_id": 13,
    "name": "*************** (hidden)",
    "make": {
      "id": 13,
      "name": "Kia"
    },
    "__message": "NOTE: Data is limited to `2020` for non-paying users. Search for 2020 vehicles or subscribe to unlock this data."
  },
  {
    "id": 59,
    "make_id": 13,
    "name": "******* (hidden)",
    "make": {
      "id": 13,
      "name": "Kia"
    },
    "__message": "NOTE: Data is limited to `2020` for non-paying users. Search for 2020 vehicles or subscribe to unlock this data."
  },
  {
    "id": 60,
    "make_id": 14,
    "name": "******** (hidden)",
    "make": {
      "id": 14,
      "name": "Land Rover"
    },
    "__message": "NOTE: Data is limited to `2020` for non-paying users. Search for 2020 vehicles or subscribe to unlock this data."
  },
  {
    "id": 61,
    "make_id": 14,
    "name": "********* (hidden)",
    "make": {
      "id": 14,
      "name": "Land Rover"
    },
    "__message": "NOTE: Data is limited to `2020` for non-paying users. Search for 2020 vehicles or subscribe to unlock this data."
  },
  {
    "id": 62,
    "make_id": 14,
    "name": "*************** (hidden)",
    "make": {
      "id": 14,
      "name": "Land Rover"
    },
    "__message": "NOTE: Data is limited to `2020` for non-paying users. Search for 2020 vehicles or subscribe to unlock this data."
  },
  {
    "id": 63,
    "make_id": 14,
    "name": "*********** (hidden)",
    "make": {
      "id": 14,
      "name": "Land Rover"
    },
    "__message": "NOTE: Data is limited to `2020` for non-paying users. Search for 2020 vehicles or subscribe to unlock this data."
  },
  {
    "id": 64,
    "make_id": 14,
    "name": "****************** (hidden)",
    "make": {
      "id": 14,
      "name": "Land Rover"
    },
    "__message": "NOTE: Data is limited to `2020` for non-paying users. Search for 2020 vehicles or subscribe to unlock this data."
  },
  {
    "id": 65,
    "make_id": 14,
    "name": "***************** (hidden)",
    "make": {
      "id": 14,
      "name": "Land Rover"
    },
    "__message": "NOTE: Data is limited to `2020` for non-paying users. Search for 2020 vehicles or subscribe to unlock this data."
  },
  {
    "id": 66,
    "make_id": 15,
    "name": "******* (hidden)",
    "make": {
      "id": 15,
      "name": "Lincoln"
    },
    "__message": "NOTE: Data is limited to `2020` for non-paying users. Search for 2020 vehicles or subscribe to unlock this data."
  },
  {
    "id": 67,
    "make_id": 16,
    "name": "***** (hidden)",
    "make": {
      "id": 16,
      "name": "Mazda"
    },
    "__message": "NOTE: Data is limited to `2020` for non-paying users. Search for 2020 vehicles or subscribe to unlock this data."
  },
  {
    "id": 68,
    "make_id": 17,
    "name": "******* (hidden)",
    "make": {
      "id": 17,
      "name": "MINI"
    },
    "__message": "NOTE: Data is limited to `2020` for non-paying users. Search for 2020 vehicles or subscribe to unlock this data."
  },
  {
    "id": 69,
    "make_id": 17,
    "name": "*********** (hidden)",
    "make": {
      "id": 17,
      "name": "MINI"
    },
    "__message": "NOTE: Data is limited to `2020` for non-paying users. Search for 2020 vehicles or subscribe to unlock this data."
  },
  {
    "id": 70,
    "make_id": 17,
    "name": "********** (hidden)",
    "make": {
      "id": 17,
      "name": "MINI"
    },
    "__message": "NOTE: Data is limited to `2020` for non-paying users. Search for 2020 vehicles or subscribe to unlock this data."
  },
  {
    "id": 71,
    "make_id": 17,
    "name": "************** (hidden)",
    "make": {
      "id": 17,
      "name": "MINI"
    },
    "__message": "NOTE: Data is limited to `2020` for non-paying users. Search for 2020 vehicles or subscribe to unlock this data."
  },
  {
    "id": 72,
    "make_id": 17,
    "name": "************** (hidden)",
    "make": {
      "id": 17,
      "name": "MINI"
    },
    "__message": "NOTE: Data is limited to `2020` for non-paying users. Search for 2020 vehicles or subscribe to unlock this data."
  },
  {
    "id": 73,
    "make_id": 18,
    "name": "************* (hidden)",
    "make": {
      "id": 18,
      "name": "Mitsubishi"
    },
    "__message": "NOTE: Data is limited to `2020` for non-paying users. Search for 2020 vehicles or subscribe to unlock this data."
  },
  {
    "id": 74,
    "make_id": 19,
    "name": "**** (hidden)",
    "make": {
      "id": 19,
      "name": "Nissan"
    },
    "__message": "NOTE: Data is limited to `2020` for non-paying users. Search for 2020 vehicles or subscribe to unlock this data."
  },
  {
    "id": 75,
    "make_id": 19,
    "name": "* (hidden)",
    "make": {
      "id": 19,
      "name": "Nissan"
    },
    "__message": "NOTE: Data is limited to `2020` for non-paying users. Search for 2020 vehicles or subscribe to unlock this data."
  },
  {
    "id": 77,
    "make_id": 21,
    "name": "*** (hidden)",
    "make": {
      "id": 21,
      "name": "Subaru"
    },
    "__message": "NOTE: Data is limited to `2020` for non-paying users. Search for 2020 vehicles or subscribe to unlock this data."
  },
  {
    "id": 78,
    "make_id": 21,
    "name": "********* (hidden)",
    "make": {
      "id": 21,
      "name": "Subaru"
    },
    "__message": "NOTE: Data is limited to `2020` for non-paying users. Search for 2020 vehicles or subscribe to unlock this data."
  },
  {
    "id": 79,
    "make_id": 21,
    "name": "******* (hidden)",
    "make": {
      "id": 21,
      "name": "Subaru"
    },
    "__message": "NOTE: Data is limited to `2020` for non-paying users. Search for 2020 vehicles or subscribe to unlock this data."
  },
  {
    "id": 80,
    "make_id": 21,
    "name": "****** (hidden)",
    "make": {
      "id": 21,
      "name": "Subaru"
    },
    "__message": "NOTE: Data is limited to `2020` for non-paying users. Search for 2020 vehicles or subscribe to unlock this data."
  },
  {
    "id": 81,
    "make_id": 21,
    "name": "******* (hidden)",
    "make": {
      "id": 21,
      "name": "Subaru"
    },
    "__message": "NOTE: Data is limited to `2020` for non-paying users. Search for 2020 vehicles or subscribe to unlock this data."
  },
  {
    "id": 82,
    "make_id": 21,
    "name": "******** (hidden)",
    "make": {
      "id": 21,
      "name": "Subaru"
    },
    "__message": "NOTE: Data is limited to `2020` for non-paying users. Search for 2020 vehicles or subscribe to unlock this data."
  },
  {
    "id": 83,
    "make_id": 22,
    "name": "**** (hidden)",
    "make": {
      "id": 22,
      "name": "Toyota"
    },
    "__message": "NOTE: Data is limited to `2020` for non-paying users. Search for 2020 vehicles or subscribe to unlock this data."
  },
  {
    "id": 84,
    "make_id": 22,
    "name": "***** (hidden)",
    "make": {
      "id": 22,
      "name": "Toyota"
    },
    "__message": "NOTE: Data is limited to `2020` for non-paying users. Search for 2020 vehicles or subscribe to unlock this data."
  },
  {
    "id": 85,
    "make_id": 22,
    "name": "************ (hidden)",
    "make": {
      "id": 22,
      "name": "Toyota"
    },
    "__message": "NOTE: Data is limited to `2020` for non-paying users. Search for 2020 vehicles or subscribe to unlock this data."
  },
  {
    "id": 86,
    "make_id": 22,
    "name": "**** (hidden)",
    "make": {
      "id": 22,
      "name": "Toyota"
    },
    "__message": "NOTE: Data is limited to `2020` for non-paying users. Search for 2020 vehicles or subscribe to unlock this data."
  },
  {
    "id": 87,
    "make_id": 23,
    "name": "******************************* (hidden)",
    "make": {
      "id": 23,
      "name": "Volvo"
    },
    "__message": "NOTE: Data is limited to `2020` for non-paying users. Search for 2020 vehicles or subscribe to unlock this data."
  },
  {
    "id": 88,
    "make_id": 23,
    "name": "*** (hidden)",
    "make": {
      "id": 23,
      "name": "Volvo"
    },
    "__message": "NOTE: Data is limited to `2020` for non-paying users. Search for 2020 vehicles or subscribe to unlock this data."
  },
  {
    "id": 89,
    "make_id": 23,
    "name": "*** (hidden)",
    "make": {
      "id": 23,
      "name": "Volvo"
    },
    "__message": "NOTE: Data is limited to `2020` for non-paying users. Search for 2020 vehicles or subscribe to unlock this data."
  },
  {
    "id": 90,
    "make_id": 23,
    "name": "*** (hidden)",
    "make": {
      "id": 23,
      "name": "Volvo"
    },
    "__message": "NOTE: Data is limited to `2020` for non-paying users. Search for 2020 vehicles or subscribe to unlock this data."
  },
  {
    "id": 91,
    "make_id": 23,
    "name": "***************** (hidden)",
    "make": {
      "id": 23,
      "name": "Volvo"
    },
    "__message": "NOTE: Data is limited to `2020` for non-paying users. Search for 2020 vehicles or subscribe to unlock this data."
  },
  {
    "id": 92,
    "make_id": 23,
    "name": "***************** (hidden)",
    "make": {
      "id": 23,
      "name": "Volvo"
    },
    "__message": "NOTE: Data is limited to `2020` for non-paying users. Search for 2020 vehicles or subscribe to unlock this data."
  },
  {
    "id": 93,
    "make_id": 23,
    "name": "**** (hidden)",
    "make": {
      "id": 23,
      "name": "Volvo"
    },
    "__message": "NOTE: Data is limited to `2020` for non-paying users. Search for 2020 vehicles or subscribe to unlock this data."
  },
  {
    "id": 94,
    "make_id": 23,
    "name": "******************************** (hidden)",
    "make": {
      "id": 23,
      "name": "Volvo"
    },
    "__message": "NOTE: Data is limited to `2020` for non-paying users. Search for 2020 vehicles or subscribe to unlock this data."
  },
  {
    "id": 95,
    "make_id": 23,
    "name": "**** (hidden)",
    "make": {
      "id": 23,
      "name": "Volvo"
    },
    "__message": "NOTE: Data is limited to `2020` for non-paying users. Search for 2020 vehicles or subscribe to unlock this data."
  },
  {
    "id": 96,
    "make_id": 23,
    "name": "**** (hidden)",
    "make": {
      "id": 23,
      "name": "Volvo"
    },
    "__message": "NOTE: Data is limited to `2020` for non-paying users. Search for 2020 vehicles or subscribe to unlock this data."
  },
  {
    "id": 97,
    "make_id": 1,
    "name": "*** (hidden)",
    "make": {
      "id": 1,
      "name": "Acura"
    },
    "__message": "NOTE: Data is limited to `2020` for non-paying users. Search for 2020 vehicles or subscribe to unlock this data."
  },
  {
    "id": 98,
    "make_id": 1,
    "name": "*** (hidden)",
    "make": {
      "id": 1,
      "name": "Acura"
    },
    "__message": "NOTE: Data is limited to `2020` for non-paying users. Search for 2020 vehicles or subscribe to unlock this data."
  },
  {
    "id": 99,
    "make_id": 1,
    "name": "*** (hidden)",
    "make": {
      "id": 1,
      "name": "Acura"
    },
    "__message": "NOTE: Data is limited to `2020` for non-paying users. Search for 2020 vehicles or subscribe to unlock this data."
  },
  {
    "id": 100,
    "make_id": 1,
    "name": "*** (hidden)",
    "make": {
      "id": 1,
      "name": "Acura"
    },
    "__message": "NOTE: Data is limited to `2020` for non-paying users. Search for 2020 vehicles or subscribe to unlock this data."
  },
  {
    "id": 101,
    "make_id": 24,
    "name": "****** (hidden)",
    "make": {
      "id": 24,
      "name": "Alfa Romeo"
    },
    "__message": "NOTE: Data is limited to `2020` for non-paying users. Search for 2020 vehicles or subscribe to unlock this data."
  }
]

function removeDuplicates(array) {
  return array.filter((item, index) => array.indexOf(item) === index)
}

const result = models.map((model) => model.make.name)

// console.log(removeDuplicates(result))

// program to stop the setInterval() method after five times

let count = 0;

// function creation
// let interval = setInterval(function(){

//     // increasing the count by 1
//     count += 1;

//     // when count equals to 5, stop the function
//     if(count === 5){
//         clearInterval(interval);
//     }

//     // display the current time
//     let dateTime= new Date();
//     let time = dateTime.toLocaleTimeString();
//     console.log(time);

// }, 1000);

const newArray = new Array(8).fill(8).map((arr) => arr)
// console.log(newArray)

