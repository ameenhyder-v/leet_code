/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let arr = Array.from(String(x))
    count = 0
    
    for(let i = 0; i < arr.length/2; i++){
        if(arr[i] !== arr[arr.length - (i+1)]){
            count++
        }
    }
    
    return count === 0
};