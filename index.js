const multiplesOfN = (n) => {
  const mults = [];
  let currentNum = n;
  if(currentNum <= 100) mults.push(currentNum);
  while(currentNum + n <= 100) {
    currentNum += n;
    mults.push(currentNum);
  }
  return mults;
};

module.exports = { multiplesOfN };
