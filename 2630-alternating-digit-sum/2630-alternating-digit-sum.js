/**
 * @param {number} n
 * @return {number}
 */
var alternateDigitSum = function(n) {
    let nums = String(n).split("");
    let result = 0;
    for (let i = 0; i < nums.length; i++) {
        if(i % 2 < 1) {
            result += parseInt(nums[i])
        }else {
            result -= parseInt(nums[i])
        }
    }
    return result
};