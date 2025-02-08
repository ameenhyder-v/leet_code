/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let letters = {};

    for(let letter of magazine) {
        letters[letter] = ++letters[letter] || 1;
    }

    for(let letter of ransomNote) {
        if (letters[letter] === 0 || !letters[letter]) {
            return false;
        }
        letters[letter]--;
    }
    return true;
};