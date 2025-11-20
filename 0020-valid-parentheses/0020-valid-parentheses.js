/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {

    const open = {
        '(': true,
        '{': true,
        '[': true
    }

    const close = {
        ')': '(',
        ']': '[',
        '}': '{',
    }
    const result = []

    for(let p of s){
        if(open[p]){
            result.push(p)
        } else {
            if(close[p] === result.at(-1)){
                result.pop()
            } else {
                return false
            }
        }
    }
    
    return !Boolean(result.length)
};