// An integer K and a non-empty array A consisting of N integers are given.

// A pair of integers (P, Q), such that 0 ≤ P ≤ Q < N, is called a slice of array A.

// A bounded slice is a slice in which the difference between the maximum and minimum values in the slice is less than or equal to K. More precisely it is a slice, such that max(A[P], A[P + 1], ..., A[Q]) − min(A[P], A[P + 1], ..., A[Q]) ≤ K.

// The goal is to calculate the number of bounded slices.

// For example, consider K = 2 and array A such that:

//     A[0] = 3
//     A[1] = 5
//     A[2] = 7
//     A[3] = 6
//     A[4] = 3
// There are exactly nine bounded slices: (0, 0), (0, 1), (1, 1), (1, 2), (1, 3), (2, 2), (2, 3), (3, 3), (4, 4).

// To solve this problem, we can use a sliding window approach. We maintain two pointers, 
// `left` and `right`, that define the boundaries of the current slice. We increment the `right` 
// pointer until the difference between the maximum and minimum values in the slice is greater than `K`. 
// When this condition is met, we increment the `left` pointer and continue the process. At each step, 
// we count the number of bounded slices and return the total count at the end.

// Here's the implementation of the `solution` function:
function solution(K, A) {
    const N = A.length;
    let count = 0;
    let left = 0;
    let right = 0;
    let maxVal = A[0];
    let minVal = A[0];

    while (right < N) {
        maxVal = Math.max(maxVal, A[right]);
        minVal = Math.min(minVal, A[right]);

        if (maxVal - minVal <= K) {
            count += right - left + 1;
            right++;
        } else {
            left++;
            if (left > right) {
                right = left;
                maxVal = A[left];
                minVal = A[left];
            }
        }
    }

    return count;
}
