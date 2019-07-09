const findMissingNumber = (arr, upper, lower) => {
  for(let i = lower; i <= upper; i++) {
    if(!arr.includes(i)) return i;
  }
};

module.exports = { findMissingNumber };
