function validParenthesis(string) {
  const stack = [];

  for (let i = 0; i < string.length; i++) {
    const top = stack[stack.length - 1];
    if (string[i] === "(" || string[i] === "{" || string[i] === "[") {
      stack.push(string[i]);
    } else if (string[i] === ")" && top === "(" && stack.length !== 0) {
      stack.pop();
    } else if (string[i] === "]" && top === "[" && stack.length !== 0) {
      stack.pop();
    } else if (string[i] === "}" && top === "{" && stack.length !== 0) {
      stack.pop();
    } else {
      return false;
    }
  }

  return stack.length === 0;
}

function validParenthesis2(string) {
  const stack = [];
  const openSet = new Set(["(", "{", "["]);
  const closeOpenMap = new Map([
    [")", "("],
    ["}", "{"],
    ["]", "["],
  ]);

  for (let i = 0; i < string.length; i++) {
    if (openSet.has(string[i])) {
      stack.push(string[i]);
    } else {
      const pop = stack.pop();
      if (pop !== closeOpenMap.get(string[i])) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

function validParenthesis3(string) {
  if (string.lenth % 2 !== 0) return false;

  const stack = [];
  const map = new Map([
    ["(", ")"],
    ["[", "]"],
    ["{", "}"],
  ]);

  for (let i = 0; i < string.length; i++) {
    if (map.has(string[i])) {
      stack.push(map.get(string[i]));
    } else if (string[i] !== stack.pop()) {
      return false;
    }
  }

  return stack.length === 0;
}


console.log(validParenthesis2("{}"))