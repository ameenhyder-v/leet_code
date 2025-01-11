/**
 * @param {string[]} strs
 * @return {string}
 */
function longestCommonPrefix(strs) {
    strs.sort()
    let a = strs[0]
    let b = strs[strs.length -1]
    let commonPrefix = ''
    for(let i = 0; i < a.length; i++){
        if(a[i] == b[i]){
            commonPrefix += a[i]
        }else{
            break
        }
    }
    return commonPrefix
};