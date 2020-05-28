function countOfAllBooleans(arr) {
  // Insert code here;
  let counter = 0;
  arr.forEach(function (element) {
    if (element === true || element === false) counter++;
  });
  return counter;
}

// Do not edit this line;
module.exports = countOfAllBooleans;
