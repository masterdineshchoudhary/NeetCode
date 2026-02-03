class Solution {
  /**
   * @param {string} s
   * @param {string} t
   * @return {boolean}
   */
  isAnagram(s, t) {
    if (s.length !== t.length) {
      return false;
    }

    const countS = {};
    const countT = {};
    for (let i = 0; i < s.length; i++) {
      countS[s[i]] = (countS[s[i]] || 0) + 1;
      countT[t[i]] = (countT[t[i]] || 0) + 1;
    }
    for (const char in countS) {
      if (countS[char] !== countT[char]) {
        return false;
      }
    }
    return true;
  }
}

const solution = new Solution();
const s = "dinesh";
const t = "deshin";
console.log(solution.isAnagram(s, t));

// Time Complexity O(n) We loop through the strings once (n is the length of the string).
// Space Complexity O(1) Technically O(26) if restricted to lowercase English, which simplifies to constant space.
