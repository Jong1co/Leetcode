/**
 * @param {number} n
 * @return {number}
 */
var countTriples = function(n) {
    let result = 0;

    for(let c = 1; c <= n; c++){
        const c2 = c ** 2

        for(let a = 1; a <= c; a++){
            const a2 = a ** 2;
            const b = Math.sqrt(c2 - a2)

            if(b && Number.isInteger(b)) {
                result++
            }
        }
    }

    return result
};