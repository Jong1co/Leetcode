/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    digits[digits.length - 1] += 1;
    let i = digits.length - 1

    while(digits[i] === 10 && i > 0){
        digits[i] = 0;
        i--
        digits[i] += 1;
    }

    if(digits[0] === 10){
        digits[0] = 0
        return [1].concat(digits)
    }

    return digits
};