/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(heights) {
    let result = 0;
    const two_point = [0, heights.length - 1];

    while(two_point[1] !== two_point[0]){
        const w = two_point[1] - two_point[0];
        const [left, right] = two_point;
        const h = Math.min(heights[left], heights[right]);
        const area = w * h;
        result = Math.max(result, area);

        if(heights[left] > heights[right]){
            two_point[1] -= 1;
        } else {
            two_point[0] += 1;
        }
    }

    return result;
};