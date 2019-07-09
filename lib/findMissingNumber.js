const findMissingNumber = (arr, upper, lower) => {
  let theoTotal = 0;
  let actualTotal = 0;
  for(let i = lower; i <= upper; i++) {
    theoTotal += i;
  }
  arr.forEach(num => actualTotal += num);
  return theoTotal - actualTotal;
};

module.exports = { findMissingNumber };
