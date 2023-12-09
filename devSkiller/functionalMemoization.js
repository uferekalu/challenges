function memoize(fn) {
    const cache = new Map()

    return function(...args) {
        const key = JSON.stringify(args)
        if (cache.has(key)) {
            return cache.get(key)
        } else {
            const result = fn(...args)
            cache.set(key, result)
            return result
        }
    }
}

const expensiveFunction = (n) => {
    console.log(`Computing ${n}`)
    return n * 2 
}

const memoizedFunction = memoize(expensiveFunction)
console.log(memoizedFunction(5))
console.log(memoizedFunction(5))


exports.calculate = function(expression) {
  // Split the expressions into an array
  const arrStr = expression.split(' ')
  // Initialize a stack to hold operands
  const stack = []
  // Iterate through arrStr
  for (const item of arrStr) {
    // Check if the item is an operand
    if (isOperator(item)) {
      // Pop the top two operands from the stack
      const operand2 = stack.pop()
      const operand1 = stack.pop()
      // Perform the operation and push the result back to the stack
      const result = operate(operand1, operand2, item)
      stack.push(result)
    } else {
      // If the token is not an operator, push it as a number onto the stack
      stack.push(parseFloat(item))
    }
  }
  return stack[0];
}

// Helper function for checking if an item is an operator
function isOperator(item) {
  return ['+', '-', '*', '/'].includes(item)
}

// Helper function to perform arithmetic operations
function operate(operand1, operand2, operator) {
  switch (operator) {
    case '+':
      return operand1 + operand2;
    case '-': 
      return operand1 - operand2;
    case '*':
      return operand1 * operand2;
    case '/':
      if (operand2 === 0) {
        throw new Error('Division by zero')
      }
      return operand1 / operand2;
    default:
      throw new Error('Invalid operator')
  }
}

exports.calculate = function (expression) {
  const tokens = expression.split(' ');

  // Define operator precedence
  const precedence = {
    '+': 1,
    '-': 1,
    '*': 2,
    '/': 2,
  };

  const stack = [];
  const output = [];

  for (const token of tokens) {
    if (!isOperator(token)) {
      output.push(parseFloat(token));
    } else {
      while (
        stack.length > 0 &&
        isOperator(stack[stack.length - 1]) &&
        precedence[token] <= precedence[stack[stack.length - 1]]
      ) {
        output.push(stack.pop());
      }
      stack.push(token);
    }
  }

  while (stack.length > 0) {
    output.push(stack.pop());
  }

  const resultStack = [];
  for (const token of output) {
    if (!isOperator(token)) {
      resultStack.push(token);
    } else {
      const operand2 = resultStack.pop();
      const operand1 = resultStack.pop();
      resultStack.push(operate(operand1, operand2, token));
    }
  }

  return resultStack[0];
};

function isOperator(token) {
  return ['+', '-', '*', '/'].includes(token);
}

function operate(operand1, operand2, operator) {
  switch (operator) {
    case '+':
      return operand1 + operand2;
    case '-':
      return operand1 - operand2;
    case '*':
      return operand1 * operand2;
    case '/':
      if (operand2 === 0) {
        throw new Error('Division by zero');
      }
      return operand1 / operand2;
    default:
      throw new Error('Invalid operator');
  }
}