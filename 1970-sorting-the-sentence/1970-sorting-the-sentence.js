/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
    // let newS = s.split(" ")

    // let a = [];
    // for(let i = 0; i < newS.length; i++){
    //     a.push(parseInt(newS[i][newS[i].length-1]))
    // }
  
    // let b = [];
    // for(let i = 0; i < newS.length; i++) {
    //     b[a[i] - 1] = newS[i]
    // }

    // for(let i = 0; i < newS.length; i++) {
    //     let n = b[i].split("");
    //     n.pop();
        
    //     b[i] = n.join("")
    // }
    // return b.join(" ")

  return s.split(" ").sort((a,b) => a[a.length-1] - b[b.length - 1])
        .map((word) => word.slice(0, word.length - 1)).join(" ");
 
};