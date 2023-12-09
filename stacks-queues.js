function balancedBracket(s) {
  if (s.length === 0 || s.length % 2 === 1) {
    return false;
  }
  const stack = [s.charAt(0)];
  for (const ch of s.slice(1)) {
    if (isClose(ch)) {
      const last = stack.pop();
      if (!isMatched(last, ch)) {
        return false;
      }
    } else {
      stack.push(ch);
    }
  }
  return stack.length === 0 ? true : false;
}

function isClose(ch) {
  return /\}|\)|\]/i.test(ch);
}

function isMatched(bracket, next) {
  switch (bracket) {
    case "(":
      return next === ")";
    case "{":
      return next === "}";
    case "[":
      return next === "]";
    default:
      return false;
  }
}
// console.log(balancedBracket("({"))
// console.log(isClose("["))

class Queue {
  constructor() {
    this.principalStack = [];
    this.auxStack = [];
  }
  fillAux() {
    if (this.auxStack.length === 0) {
      while (this.principalStack.length > 0) {
        this.auxStack.push(this.principalStack.pop());
      }
    }
  }
  enqueue(value) {
    this.principalStack.push(value);
    return this.principalStack
  }
  dequeue() {
    this.fillAux();
    this.auxStack.pop();
    return this.auxStack
  }
  printRear() {
    this.fillAux();
    const head = this.auxStack.pop();
    console.log(head);
    this.auxStack.push(head);
  }
}

function processData(input) {
  const ACTIONS = {
    ENQUEUE: "1",
    DEQUEUE: "2",
    PRINT: "3",
  };
  const queue = new Queue();
  input.split("\n").forEach((line) => {
    const query = line.split(" ");
    switch (query[0]) {
      case ACTIONS.ENQUEUE:
        queue.enqueue(query[1]);
        break;
      case ACTIONS.DEQUEUE:
        queue.dequeue();
        break;
      case ACTIONS.PRINT:
        queue.printRear();
        break;
    }
  });
}

// console.log(processData())
