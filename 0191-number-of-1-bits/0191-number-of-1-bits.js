/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function(n) {
    let s = n.toString(2);
    return s.split("").reduce((acc, val) => acc += Number(val), 0 )

};