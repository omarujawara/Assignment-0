function countOfAllNumbersSmallerThanTarget(nums, target) {
  // Insert code here;
  let counter = 0;
  nums.forEach(function (element) {
    if (element < target) counter++;
  });
  return counter;
}

// Do not edit this line;
module.exports = countOfAllNumbersSmallerThanTarget;
