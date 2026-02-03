class Solution {
  hasDuplicate(nums) {
    const seen = new Set();
    for (const num of nums) {
      if (seen.has(num)) {
        return true;
      }
      seen.add(num);
    }
    return false;
  }
}

const solution = new Solution();
const arr = [1, 2, 4, 4];
console.log(solution.hasDuplicate(arr));
