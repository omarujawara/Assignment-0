function frequencyCounter(word) {
  // Insert code here;
  let frequency = {};
  word = word.split("");
  word.forEach(function (k) {
    if (frequency[k]) frequency[k]++;
    else frequency[k] = 1;
  });
  return frequency;
}

// Do not edit this line;
module.exports = frequencyCounter;
