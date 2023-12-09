function rotateLeft(d, arr) {
    const rotatedArray = arr.slice(d).concat(arr.slice(0, d));
    return rotatedArray;
  }
  
  // Example usage
  const d = 4;
  const arr = [1, 2, 3, 4, 5];
  
  console.log(rotateLeft(d, arr)); // Output: [5, 1, 2, 3, 4]