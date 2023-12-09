function arrayManipulation(n, queries) {
    const arr = new Array(n).fill(0);
  
    // Perform operations on the array
    for (let i = 0; i < queries.length; i++) {
      const [start, end, value] = queries[i];
      arr[start - 1] += value;
      if (end < n) {
        arr[end] -= value;
      }
    }
  
    // Find the maximum value in the array
    let max = 0;
    let sum = 0;
    for (let i = 0; i < n; i++) {
      sum += arr[i];
      max = Math.max(max, sum);
    }
  
    return max;
  }
  
  // Example usage
  const n = 5;
  const queries = [
    [1, 2, 100],
    [2, 5, 100],
    [3, 4, 100]
  ];
  
  console.log(arrayManipulation(n, queries)); // Output: 200
//   In the `arrayManipulation` function, we first create an array `arr` of size `n` and initialize all its elements to zero.
  
//   We then iterate through the `queries` array and perform the given operations on the `arr` array. For each query, we update the element at the `start - 1` index by adding the given value. If the `end` index is within the bounds of the array, we subtract the given value from the element at the `end` index.
  
//   After performing all the operations, we iterate through the `arr` array and calculate the cumulative sum of its elements. We keep track of the maximum value encountered during this process.
  
//   Finally, we return the maximum value found in the `arr` array.
  
//   The example usage demonstrates how to use the `arrayManipulation` function with the provided input. The expected output is `200`, which represents the maximum value in the array after performing all the operations.
  
//   You can modify the function and the input variables as per the requirements of the problem.