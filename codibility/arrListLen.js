// A non-empty array A consisting of N integers is given.

// Array A represents a linked list. A list is constructed from this array as follows:

// the first node (the head) is located at index 0;
// the value of a node located at index K is A[K];
// if the value of a node is −1 then it is the last node of the list;
// otherwise, the successor of a node located at index K is located at index A[K] (you can assume that A[K] is a valid index, that is 0 ≤ A[K] < N).
// For example, for array A such that:

//   A[0] =  1
//   A[1] =  4
//   A[2] = -1
//   A[3] =  3
//   A[4] =  2
function solution(A) {
    let length = 0;
    let currentIndex = 0;

    while (currentIndex !== -1) {
        currentIndex = A[currentIndex];
        length++;
    }

    return length;
}
const A = [1, 4, -1, 3, 2];
console.log(solution(A))