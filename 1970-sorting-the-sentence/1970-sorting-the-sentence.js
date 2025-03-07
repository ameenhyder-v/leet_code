/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
    let newS = s.split(" ")

    let a = [];
    for(let i = 0; i < newS.length; i++){
        a.push(parseInt(newS[i][newS[i].length-1]))
    }
  
    let b = [];
    for(let i = 0; i < newS.length; i++) {
        b[a[i] - 1] = newS[i]
    }

    for(let i = 0; i < newS.length; i++) {
        let n = b[i].split("");
        n.pop();
        
        b[i] = n.join("")
    }
    // console.log(b)
    return b.join(" ")
    
};