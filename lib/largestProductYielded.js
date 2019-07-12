const largestProductYielded = (nums) => {
  let sorted = nums.sort((a, b) => a - b);

  let largestNegative = 0;
  let secondLargestNegative = 0;

  let largestPositive = sorted[sorted.length - 1];
  let secondLargestPositive = sorted[sorted.length - 2];
  let thirdLargestPositive = sorted[sorted.length - 3];

  if(sorted[0] < 0 && sorted[1] < 0) {
    largestNegative = sorted[0];
    secondLargestNegative = sorted[1];
  }

  const largestNoNegative = largestPositive * secondLargestPositive * thirdLargestPositive;
  const largestWithNegative = largestPositive * largestNegative * secondLargestNegative;

  return largestNoNegative > largestWithNegative ? largestNoNegative : largestWithNegative;
};

module.exports = { largestProductYielded };
