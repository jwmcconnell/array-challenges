const findMissingNumber = (arr, upper, lower) => {
  let theoTotal = upper * (upper + 1) / 2 - ((lower - 1) * lower / 2);
  let actualTotal = arr.reduce((acc, num) => acc + num);
  return theoTotal - actualTotal;
};

module.exports = { findMissingNumber };
