class MySolution {
  constructor() {
    this.flag = false;
  }

  binarySearch(nums, target) {
    // Insert code here;
    let first = 0;
    let last = nums.size - 1;
    // let middle;
    // let found = false;
    // let position = false;
    while (first <= last) {
      let middle = Math.floor((first + last) / 2);
      if (nums[middle] === target) return true;
      else if (nums[middle] > target) last = middle - 1;
      else first = middle + 1;
    }
    return false;
  }
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;
