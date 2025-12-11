/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    const map = new Map();

    nums.forEach((num) => {
        if(map.has(num)){
            map.delete(num)
        } else {
            map.set(num, true)
        }
    })

    return map.keys().next().value
};