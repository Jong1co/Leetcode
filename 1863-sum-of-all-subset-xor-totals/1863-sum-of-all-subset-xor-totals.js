/**
 * @param {number[]} nums
 * @return {number}
 */
var subsetXORSum = function (nums) {
  // subset찾아
  // xor 때려

  const subsets = [];

  function subset(arr = [], startIndex = 0) {
    for (let i = startIndex; i < nums.length; i++) {
      const list = arr.concat([nums[i]]);
      subsets.push(list);
      subset(list, i + 1);
    }
  }

  subset();

  return subsets.reduce((acc ,cur) => acc + cur.reduce((a, b) => a ^ b, 0) ,0)
};