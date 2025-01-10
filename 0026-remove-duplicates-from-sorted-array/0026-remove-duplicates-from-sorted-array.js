/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (nums.length === 0) return 0;
    
    let i = 0; // Pointer to keep track of unique elements
    
    for (let j = 1; j < nums.length; j++) {
        if (nums[j] !== nums[i]) { // Found a new unique element
            i++;
            nums[i] = nums[j];
        }
    }
    
    return i + 1; // Number of unique elements                   // Returns the modified array
};