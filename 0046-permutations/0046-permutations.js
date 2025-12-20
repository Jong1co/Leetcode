/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let result = []
    function dfs(origin, arr = []){
        if(!origin.length) {
            result.push(arr)
            return
        }

        for(let i = 0; i < origin.length; i++){
            dfs(origin.filter((_, idx) => idx !== i), [...arr, origin[i]])
        }
    }

    dfs(nums, [])

    return result
};

