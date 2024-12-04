/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
    // let hashTable = {}
    // for(let num of nums){
    //     hashTable[num] = (hashTable[num] || 0) + 1
    // }
    // console.log(hashTable)
    // let a = Array.from(hashTable)
    // console.log(a)

    let a = 0
    let b = nums.sort((a,b) => a - b)
    for(let i = 0; i < b.length; i++){
        if(b.indexOf(b[i]) == b.lastIndexOf(b[i])){
            a += b[i]
        }

    }
    return a
};
