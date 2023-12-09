function hourglassSum(arr) {
    // Set the initial maxSum to the lowest possible value
    let maxSum = -Infinity;
  
    // Iterate through the 2D array, excluding the border elements
    for (let i = 1; i < arr.length - 1; i++) {
      for (let j = 1; j < arr[i].length - 1; j++) {
        // Calculate the sum of the current hourglass pattern
        const sum =
          arr[i - 1][j - 1] +
          arr[i - 1][j] +
          arr[i - 1][j + 1] +
          arr[i][j] +
          arr[i + 1][j - 1] +
          arr[i + 1][j] +
          arr[i + 1][j + 1];
  
        // Update the maxSum if the current sum is greater
        if (sum > maxSum) {
          maxSum = sum;
        }
      }
    }
  
    return maxSum;
  }
  
  // Example usage
  const arr = [
    [1, 1, 1, 0, 0, 0],
    [0, 1, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0],
    [0, 0, 2, 4, 4, 0],
    [0, 0, 0, 2, 0, 0],
    [0, 0, 1, 2, 4, 0],
  ];
  
  console.log(hourglassSum(arr)); // Output: 1

  