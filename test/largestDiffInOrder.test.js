const { largestDiffInOrder } = require('../lib/largestDiffInOrder');

describe('largestDiffInOrder', () => {
  it('returns a number', () => {
    const result = largestDiffInOrder([7, 8, 4, 9, 9, 15, 3, 1, 10]);
    expect(result).toEqual(expect.any(Number));
  });
});
