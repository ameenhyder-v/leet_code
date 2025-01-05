/**
 * @param {string} expression
 * @return {number[]}
 */
var diffWaysToCompute = function(expression) {
    const repo = new Map(); 

    function solve(expr) {
        if (repo.has(expr)) return repo.get(expr);

        const results = [];

        for (let i = 0; i < expr.length; i++) {
             const char = expr[i];

             if(char === "+" || char === "-" || char === "*") {

                const left = solve(expr.slice(0, i));
                const right = solve(expr.slice(i + 1));

                for(const l of left){
                    for( const r of right){
                        if(char === "+") {
                            results.push(l+r);
                        } else if(char === "-"){
                            results.push(l - r);
                        } else if(char === "*"){
                            results.push(l * r);
                        }
                    }
                }
             }
        }

        if( results.length === 0) results.push(parseInt(expr))

        repo.set(expr, results);
        return results;

    }
    return solve(expression)

};