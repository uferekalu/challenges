function reverseStr(str) {
    let arr = str.split('')
    let reveresedArr = arr.reverse()
    let result = reveresedArr.join('')
    return result
}
// console.log(reverseStr('congratulations'))

function palindrome(str) {
     // Remove non-alphanumeric characters and convert to lowercase
  let cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

  // Reverse the cleaned string
  let reversedStr = cleanedStr.split('').reverse().join('');

  // Compare the cleaned string with the reversed string
  return cleanedStr === reversedStr;
}
// console.log(palindrome('m1ad1m'))


function palindrome2(str) {
    let cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()

    let result = ''
    for (let i = cleanedStr.length - 1; i >=0; i--) {
        result = result + cleanedStr[i]
    }
    return cleanedStr === result
}

// console.log(palindrome2('mma45d54amm'))

function fibonacciSequence(numTerms) {
    if (numTerms <= 0) {
        throw new Error("You must provide a number greater than 0")
    }
    let sequence = []
    let firstTerm = 0
    let secondTerm = 1

    for (let i = 0; i < numTerms; i++) {
        if (i === 0) {
            sequence.push(firstTerm)
        } else if (i === 1) {
            sequence.push(secondTerm)
        } else {
            let nextTerm = sequence[i - 1] + sequence[i - 2]
            sequence.push(nextTerm)
        }
    }

    return sequence
}

try {
    let input = 6
    let result = fibonacciSequence(input)
    console.log(result)
} catch (error) {
    console.error(error.message)
}

function findLargestNumber(numbers) {
    if (numbers.length === 0) {
        throw new Error("The array must not be empty")
    }

    let largest = numbers[0]
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > largest) {
            largest = numbers[i]
        }
    }
    return largest
}

try {
    let numbers = []
    let result = findLargestNumber(numbers)
    console.log(result)
} catch (error) {
    console.error(error.message)
}

function removeDuplicates(numbers) {
    let result = []
    let uniqueNumbers = new Set(numbers)
    for (let num of uniqueNumbers.values()) {
        result.push(num)
    }
    return result
}

console.log(removeDuplicates([1, 2, 3, 2, 4, 1]))

function isPrime(number) {
    // Check if the number is less than 2
    if (number < 2) {
      return false;
    }
  
    // Check if the number is divisible by any integer from 2 to the square root of the number
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
  
    return true;
  }
  
  // Example usage:
  let input = 7;
  let isInputPrime = isPrime(input);
  console.log(isInputPrime); // Output: true