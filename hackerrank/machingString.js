function matchingStrings(strings, queries) {
    const occurrences = {};
  
    // Count the occurrences of each string in the array
    for (let i = 0; i < strings.length; i++) {
      const string = strings[i];
      if (occurrences[string]) {
        occurrences[string]++;
      } else {
        occurrences[string] = 1;
      }
    }
  
    const results = [];
  
    // Count the occurrences of each query string
    for (let i = 0; i < queries.length; i++) {
      const query = queries[i];
      if (occurrences[query]) {
        results.push(occurrences[query]);
      } else {
        results.push(0);
      }
    }
  
    return results;
  }
  
  // Example usage
  const strings = ["aba", "baba", "aba", "xzxb"];
  const queries = ["aba", "xzxb", "ab"];
  
  console.log(matchingStrings(strings, queries)); // Output: [2, 1, 0]