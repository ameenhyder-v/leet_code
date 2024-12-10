/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let freqMap = {};
    
    for (let num of nums) {
        freqMap[num] = (freqMap[num] || 0) + 1;
    }
    console.log(freqMap)
    result = nums.length/2;
    for(let num of nums) {
        if(freqMap[num] > result){
            return parseInt(num)
        }
    }
};