/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findXSum = function(nums, k, x) {
    const count = nums.length - k + 1
    const result = []
    for(let i = 0; i < count; i++){
        const map = nums
            .slice(i, i + k)
            .reduce((acc, cur) => {
                acc[cur] = acc[cur] ? acc[cur] + 1 : 1;
                return acc
            }, {})

        const sum = Object.entries(map)
            .sort((a, b) => b[1] - a[1] || b[0] - a[0])
            .slice(0, x)
            .reduce((acc, cur) => acc + cur[0] * cur[1], 0)
            
        result.push(sum)
    }
    
    return result
};