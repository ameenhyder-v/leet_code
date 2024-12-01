/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let count = 0;
    nums.forEach((ele, index) => {
        if(ele !== val) {
            nums[count] = ele;
            count++;
        } 
        
    });

    return count;
};