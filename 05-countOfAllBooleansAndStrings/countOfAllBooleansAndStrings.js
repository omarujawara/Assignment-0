function countOfAllBooleansAndStrings(arr) {
  // Insert code here;
  let counter = 0;
  arr.forEach(function (element) {
    if (element === true || element === false || typeof element === "string")
      counter++;
  });
  return counter;
}

// Do not edit this line;
module.exports = countOfAllBooleansAndStrings;
