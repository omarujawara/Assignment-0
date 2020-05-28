function productOfAnyAmountOfNumbers(...args) {
  // Insert code here;
  let productSum = 1;
  for (let i = 0; i < args.length; ++i) {
    productSum *= args[i];
  }
  return productSum;
}

// Do not edit this line;
module.exports = productOfAnyAmountOfNumbers;
