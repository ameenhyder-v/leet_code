/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberOfPairs = function(nums) {
    let freq = new Map();
    let pairs = 0;

    for (let num of nums) {
        freq.set(num , (freq.get(num) || 0) + 1);
    }

    let leftOvers = 0;
    for (let [num, count] of freq.entries()) {
        pairs += Math.floor(count / 2);
        leftOvers += count % 2;
    }

    return [pairs, leftOvers]
}