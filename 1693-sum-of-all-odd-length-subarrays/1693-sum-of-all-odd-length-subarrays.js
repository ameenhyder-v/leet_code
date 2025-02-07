/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function(arr) {
    let totalSum = 0;
    let n = arr.length;

    for (let i = 0; i < n; i++) {
        let contribution = Math.ceil(((i + 1) * (n - i)) / 2);
        console.log(contribution)
        totalSum += arr[i] * contribution;
    }

    return totalSum;
    
};

// function findSum(arr) {
//     return arr.reduce((acc, val) => acc += val, 0);
// }