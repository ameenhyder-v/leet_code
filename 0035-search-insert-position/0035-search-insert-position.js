/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    if(nums.includes(target)) return nums.indexOf(target);

    arr = [...nums, target].sort((a,b) => a - b);
    return arr.indexOf(target);
};