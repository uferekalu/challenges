const data = {
  page: 2,
  per_page: 10,
  total: 41,
  total_pages: 5,
  data: [
    {
      title: "",
      url: "",
      author: "WisNorCan",
      num_comments: null,
      story_id: null,
      story_title: null,
      story_url: null,
      parent_id: 4839436,
      created_at: 1354054386,
    },
    {
      title: "UK votes to leave EU",
      url: "http://www.bbc.co.uk/news/uk-politics-36615028",
      author: "dmmalam",
      num_comments: 2531,
      story_id: null,
      story_title: null,
      story_url: null,
      parent_id: null,
      created_at: 1466740137,
    },
    {
      title: "Why I Quit Google to Work for Myself",
      url: "https://mtlynch.io/why-i-quit-google/",
      author: "dmmalam",
      num_comments: 751,
      story_id: null,
      story_title: null,
      story_url: null,
      parent_id: null,
      created_at: 1519828685,
    },
    {
      title: "Lavabit abruptly shuts down",
      url: "http://lavabit.com/",
      author: "dmmalam",
      num_comments: 643,
      story_id: null,
      story_title: null,
      story_url: null,
      parent_id: null,
      created_at: 1375989154,
    },
    {
      title:
        "EU approves internet copyright law, including ‘link tax’ and ‘upload filter’",
      url: "https://www.theverge.com/2018/9/12/17849868/eu-internet-copyright-reform-article-11-13-approved",
      author: "dmmalam",
      num_comments: 1010,
      story_id: null,
      story_title: null,
      story_url: null,
      parent_id: null,
      created_at: 1536751541,
    },
    {
      title: "Tim Cook Speaks Up",
      url: "http://www.businessweek.com/articles/2014-10-30/tim-cook-im-proud-to-be-gay",
      author: "replicatorblog",
      num_comments: 974,
      story_id: null,
      story_title: null,
      story_url: null,
      parent_id: null,
      created_at: 1414667543,
    },
    {
      title: "CIA malware and hacking tools",
      url: "https://wikileaks.org/ciav7p1/",
      author: "replicatorblog",
      num_comments: null,
      story_id: null,
      story_title: null,
      story_url: null,
      parent_id: 5536734,
      created_at: 1365743273,
    },
    {
      title: "I Sell Onions on the Internet",
      url: "https://www.deepsouthventures.com/i-sell-onions-on-the-internet/",
      author: "eightturn",
      num_comments: 435,
      story_id: null,
      story_title: null,
      story_url: null,
      parent_id: null,
      created_at: 1556024424,
    },
    {
      title:
        "macOS High Sierra: Anyone can login as “root” with empty password",
      url: "https://twitter.com/lemiorhan/status/935578694541770752",
      author: "vladikoff",
      num_comments: 813,
      story_id: null,
      story_title: null,
      story_url: null,
      parent_id: null,
      created_at: 1511898070,
    },
    {
      title: "SpaceX’s Falcon Heavy successfully launches",
      url: "https://techcrunch.com/2018/02/06/spacexs-historic-falcon-heavy-successfully-launches/?ncid=rss&utm_source=dlvr.it&utm_medium=twitter",
      author: "mpweiher",
      num_comments: 872,
      story_id: null,
      story_title: null,
      story_url: null,
      parent_id: null,
      created_at: 1517950635,
    },
  ],
};

const filteredArticles = data.data.filter((item) => item.created_at);

// console.log(filteredArticles)
// console.log(Array(5).fill(6).map((val, idx) => `button-text: ${idx + 1}`))
const TRANSLATIONS = new Map([
  ["ball", "pelota"],
  ["house", "casa"],
  ["dog", "perro"],
  ["dogs", "perros"],
  ["milk", "leche"],
  ["orange", "naranja"],
]);

//   var input = prompt("enter something to translate:" )
//   for (let name of TRANSLATIONS.keys()) {
//     if (input === name) {
//         const translation = TRANSLATIONS.get(input)
//         const key = document.getElementById("key")
//         const val = document.getElementById("value")
//         key.innerHTML = input
//         val.innerHTML = translation
//     }
//   }
// TRANSLATIONS.forEach((key, value) => {
//     console.log(key, value)
// })

const EMPLOYEES = [
  {
    name: "Parker Green",
  },
  {
    name: "Jordan Richards",
  },
  {
    name: "Alex Stevens",
  },
  {
    name: "Avery Scott",
  },
  {
    name: "Riley Miller",
  },
  {
    name: "Charlie Green",
  },
];

function getRandomNumber(max, min) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// console.log(EMPLOYEES[getRandomNumber(0, EMPLOYEES.length)])
const response = {
  page: 1,
  per_page: 5,
  total: 5,
  total_pages: 1,
  data: [
    { title: "example title 1" },
    { title: null },
    { title: "example title 2" },
    { title: "" },
    { title: "example title 3" },
  ],
};
// console.log(JSON.stringify(response), typeof response)
function plusMinus(arr) {
  // Write your code here
  let postive = [],
    negative = [],
    zero = [];
  let result = "";
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      negative.push(arr[i]);
    } else if (arr[i] > 0) {
      postive.push(arr[i]);
    } else {
      zero.push(arr[i]);
    }
  }
  const posRatio = parseFloat(postive.length / arr.length).toFixed(6);
  const negRatio = parseFloat(negative.length / arr.length).toFixed(6);
  const zeRatio = parseFloat(zero.length / arr.length).toFixed(6);
  result += posRatio + "\n";
  result += negRatio + "\n";
  result += zeRatio;
  return result;
}

// console.log(plusMinus([-4, 3, -9, 0, 4, 1]))
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

function staircase(n) {
  let stairs = "";
  for (let i = 0; i < n; i++) {
    let result =
      repeatStringNumTimes(" ", n - i) +
      repeatStringNumTimes("#", i + 1) +
      "\n";
    stairs += result;
  }
  return stairs;
}
// console.log(staircase(6))

function staircase2(n) {
  for (let i = 1; i <= n; i++) {
    console.log(" ".repeat(n - i) + "#".repeat(i));
  }
}
console.log(staircase2(6))
