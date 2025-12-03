/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let max = Math.max(a.length, b.length)
    a = a.split("").reverse()
    b = b.split("").reverse()

    while(a.length !== max){
        a.push('0')
    }

    while(b.length !== max){
        b.push('0')
    }


    let result = []

    let up = false;

    for(let i = 0; i < max; i++){
        if(a[i] === '0' && b[i] === '0' && !up) {
            result.push('0')
            continue;
        }

        if(a[i] === '1' && b[i] === '1' && up) {
            result.push('1')
            continue;
        }

        if(
            a[i] === '1' && b[i] === '0' && up ||
            a[i] === '0' && b[i] === '1' && up ||
            a[i] === '1' && b[i] === '1' && !up
        ){
            up = true;
            result.push('0')
            continue;
        }

        up = false;
        result.push('1')
    }

    if(up){
        result.push('1')
    }

    return result.reverse().join("");
};