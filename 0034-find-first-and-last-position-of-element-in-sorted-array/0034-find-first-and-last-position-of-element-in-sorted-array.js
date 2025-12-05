/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    // 시작점은 i - 1 인덱스가 target보다 작고, i 인덱스가 target
    // 끝점은 j + 1 인덱스가 없거나 target보다 크고, j인덱스가 target


    let result = [-1, -1];

    if(nums.length === 0) return result;

    let left = 0;
    let right = nums.length - 1;
    let mid = Math.floor((left + right) / 2);

    while(left <= right){
        if((nums[mid - 1] < target || nums[mid - 1] === undefined)  && nums[mid] === target){
            result[0] = mid;
            break;
        }

        if(nums[mid] < target){
            left = mid + 1
        } else {
            right = mid - 1
        }

        mid = Math.floor((left + right) / 2);
    }

    if(result[0] === -1) return result;

    left = result[0];
    right = nums.length - 1;
    mid = Math.floor((left + right) / 2);

    while(left <= right){
        if((nums[mid + 1] > target || nums[mid + 1] === undefined) && nums[mid] === target){
            result[1] = mid;
            break;
        }

        if(nums[mid] > target){
            right = mid - 1
        } else {
            left = mid + 1
        }

        mid = Math.floor((left + right) / 2);
    }

    return result
};