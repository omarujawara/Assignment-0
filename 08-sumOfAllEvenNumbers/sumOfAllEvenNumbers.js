function sumOfAllEvenNumbers(nums) {
  // Insert code here;
  let counter = 0;
  nums.forEach(function (element) {
    if (element % 2 === 0) counter++;
  });
  return counter;
}

// Do not edit this line;
module.exports = sumOfAllEvenNumbers;
