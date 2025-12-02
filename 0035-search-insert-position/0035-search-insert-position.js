/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    if(nums[0] > target) return 0
    if(nums[0] === target) return 0
    if(nums[nums.length - 1] < target) return nums.length

    let left = 0;
    let right = nums.length;
    
    while(right - left > 1){
        let mid = Math.floor((left + right) / 2);
        if(nums[mid] === target) return mid;
        if(nums[mid] > target) {
            right = mid;
        } else {
            left = mid;
        }
    }

    return right
};