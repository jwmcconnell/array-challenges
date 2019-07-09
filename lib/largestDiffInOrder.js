const largestDiffInOrder = (arr) => {
  let largest = 0;
  for(let i = 0; i < arr.length; i++) {
    for(let j = i + 1; j < arr.length; j++) {
      if(arr[j] - arr[i] > largest) largest = arr[j] - arr[i];
    }
  }
  return largest;
};

module.exports = { largestDiffInOrder };
