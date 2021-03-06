// Coin denomination problem
// Find minimum number of coins required to make up a given value
// Input: [1,5,10,25], 100
// Output: 4

// Solution by Yoo Jin

/**
 * Returns the minimum number of coins required to make up the given total value
 * Each coin denomination can be used as many times as needed.
 * @param {number[]} arr - An array of coin denomination numbers (1 is always included)
 * @param {number} total - The total value 
 * @returns {number} min - The mininum number of coins which add up to the toal value
 */

const solution = (arr, total) => {
  if (total === 0) {
    return 0;
  }
  
  return arr.reduce( (acc, denomination) => {
    if (total - denomination >= 0) {
      return Math.min(acc, 1 + solution(arr, total - denomination));
    }
    return acc;
  }, total);
};

module.exports = {
  solution
};
