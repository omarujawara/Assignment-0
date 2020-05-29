function setUnionOfAnyAmountOfSets(...args) {
  // Insert code here;
  let union = new Set();
  args.forEach((setElement) => {
    for (const elementOfSetElement of setElement) {
      union.add(elementOfSetElement);
    }
  });

  return union;
}
setUnionOfAnyAmountOfSets(
  setUnionOfAnyAmountOfSets([1, 2, 4], [4, 5, 6], [6, 7, 8])
);
// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;
