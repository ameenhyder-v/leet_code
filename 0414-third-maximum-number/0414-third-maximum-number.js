/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    let set = new Set(nums)

    const myArray = Array.from(set);
    return myArray.sort((a,b) => b - a).length < 3 ? myArray[0] : myArray[2]
};