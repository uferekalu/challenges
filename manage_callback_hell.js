function total(sum) {
  console.log("Total " + sum);
}

function calculator(num1, num2, callback) {
  let total = num1 + num2;
  callback(total);
}

// calculator(20, 30, total)

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Successful");
  }, 300);
});
// console.log(await myPromise)

const getRandomnumber = function () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(Math.floor(Math.random() * 20));
    }, 1000);
  });
};

const addRandomNumbers2 = async function () {
  const rand1 = await getRandomnumber();
  const rand2 = await getRandomnumber();
  console.log(rand1);
  console.log(rand2);
  console.log(rand1 + rand2);
};

// addRandomNumbers2()

const someMap = new Promise((resolve, reject) => {
  let i = 0;
  const newMap = new Map();
  while (i < 6) {
    newMap.set(
      i,
      new Set(
        new Array(6).fill(i + 1).map((val, idx) => {
          return val + idx;
        })
      )
    );
    i++;
  }
  return resolve(newMap);
});

// console.log(await someMap)
