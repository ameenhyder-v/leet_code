/**
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */
function prefixCount(words, pref, index = 0, count = 0) {
    // let count = 0;
    // for(let word of words) {
    //     if(word.startsWith(pref)){
    //         count++
    //     }
    // }
    // return count


    if(index === words.length) {
        return count;
    }

    if(words[index].startsWith(pref)) {
        count++;
    }
    return prefixCount(words, pref, index + 1, count);
};