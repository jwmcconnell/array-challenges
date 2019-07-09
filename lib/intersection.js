const intersection = (first, second) => {
  const intersection = [];
  const interDict = {};
  first.forEach((num) => {
    if(second.indexOf(num) !== -1 && !interDict[num]) {
      intersection.push(num);
      interDict[num] = true;
    }
  });
  return intersection;
};

module.exports = { intersection };
