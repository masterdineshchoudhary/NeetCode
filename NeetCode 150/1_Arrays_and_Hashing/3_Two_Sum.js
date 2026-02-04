// Brute Force
// use nested loops - pick one number and then loop through every other number in the array to see if they hit the target.
// Problem: This is slow.for 1,000 numbers, it might take (1000^2) 1 million comparisons, this is O(n^2) time complexity.

for (let i = 0; i < nums.length; i++) {
  for (let j = i + 1; j < nums.length; j++) {
    if (nums[i] + nums[j] === target) {
      return [i, j];
    }
  }
}

class Solution {
  /**
   * @param {number[]} nums
   * @param {number} target
   * @return {number[]}
   */
  twoSum(nums, target) {
    let numMap = new Map();
    for (let i = 0; i < nums.length; i++) {
      let complement = target - nums[i];
      if (numMap.has(complement)) {
        return [numMap.get(complement), i];
      }
      numMap.set(nums[i], i);
    }
  }
}

const solution = new Solution();
const nums = [2, 7, 11, 15];
const target = 9;
console.log(solution.twoSum(nums, target));

// time complexity: Looking up a value in a Map (a Hash Map), we only need to loop through array once. O(n).
// space complexity: used more memory to store the Map, speed > space
