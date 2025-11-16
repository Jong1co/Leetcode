/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumPairRemoval = function(nums) {
    let count = 0;
    while(true){
        let minimumIndex = 0;
        let minimunSum = Number.MAX_SAFE_INTEGER;
        let isSorted = true;
        for(let i = 0; i < nums.length - 1; i++){
            const cur = nums[i];
            const next = nums[i + 1];
            
            const sum = cur + next;

            if(cur > next) isSorted = false;
            if(minimunSum > sum){
                minimunSum = sum;
                minimumIndex = i;
            }
        }

        if(isSorted) {
            break;
        } else {
            nums.splice(minimumIndex, 2, minimunSum);
        }
        count++;
    }

    return count;
};