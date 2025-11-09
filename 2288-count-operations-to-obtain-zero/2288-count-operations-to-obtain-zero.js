/**
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
var countOperations = function(num1, num2) {
  let result = 0;
  while(num1 && num2){
    if(num1 >= num2){
        const q = Math.floor(num1 / num2)
        num1 -= (num2 * q)
        result += q
    } else {
        const q = Math.floor(num2 / num1)
        num2 -= (num1 * q)
        result += q
    }
  }
  return result
};