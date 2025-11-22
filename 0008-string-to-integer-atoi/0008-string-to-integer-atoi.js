/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    s = s.trim()
    const result = Number(s.match(/^[+\-]?\d+/g))
    if(-2147483648 > result) return -2147483648
    if(2147483647 < result) return 2147483647

    return result
};