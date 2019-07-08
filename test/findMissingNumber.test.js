const { findMissingNumber } = require('../lib/findMissingNumber');

describe('findMissingNumber', () => {
  it('returns a number', () => {
    const result = findMissingNumber([1, 2, 3, 4], 1, 4);
    expect(result).toEqual(expect.any(Number));
  });
});
