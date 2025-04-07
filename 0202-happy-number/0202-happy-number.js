/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let obj = new Set();

    while (!obj.has(n)) {
        obj.add(n);
        n = getNextNumber(n);
        if (n === 1) {
            return true;
        }
    }
    return false;
};

let getNextNumber = function(n) {
        let output = 0;

        while (n > 0) {
        let digit = n % 10;
        output += digit * digit;
        n = Math.floor(n / 10);
        }
    return output;
}