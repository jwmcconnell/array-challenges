const { findMissingNumber } = require('../lib/findMissingNumber');

describe('findMissingNumber', () => {
  it('returns a number', () => {
    const result = findMissingNumber([2, 5, 1, 4, 9, 6, 3, 7], 9, 1);
    expect(result).toEqual(expect.any(Number));
  });

  it('returns the missing number in an array', () => {
    const result = findMissingNumber([2, 5, 1, 4, 9, 6, 3, 7], 9, 1);
    expect(result).toEqual(8);
  });

  it('returns the missing number in an array', () => {
    const result = findMissingNumber([2, -1, -2, 5, 1, 4, 9, 8, 6, 3, 7], 9, -3);
    expect(result).toEqual(-3);
  });
});
