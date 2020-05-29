function pairSum(nums, target) {
  // Insert code here;
  try {
    if (nums.length <= 1) throw Error;
    let isSum = false;
    for (let i = 0; i < nums.length; ++i) {
      for (let j = 0; j < nums.length; ++j) {
        if (nums[i] + nums[j] === target) {
          isSum = true;
          break;
        }
      }
    }
    return isSum;
  } catch (error) {
    return error;
  }
}

// console.log(pairSum([0, 1, 2, 3, 4, 5], 8));
// Do not edit this line;
module.exports = pairSum;
