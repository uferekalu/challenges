function dynamicArray(n, queries) {
    const sequences = new Array(n);
    for (let i = 0; i < n; i++) {
      sequences[i] = [];
    }
  
    let lastAnswer = 0;
    const result = [];
  
    for (let i = 0; i < queries.length; i++) {
      const [type, x, y] = queries[i];
  
      const index = (x ^ lastAnswer) % n;
  
      if (type === 1) {
        sequences[index].push(y);
      } else if (type === 2) {
        const seq = sequences[index];
        const size = seq.length;
        const elementIndex = y % size;
        lastAnswer = seq[elementIndex];
        result.push(lastAnswer);
      }
    }
  
    return result;
  }
  
  // Example usage
  const n = 2;
  const queries = [
    [1, 0, 5],
    [1, 1, 7],
    [1, 0, 3],
    [2, 1, 0],
    [2, 1, 1],
  ];
  
  console.log(dynamicArray(n, queries)); // Output: [7, 3]