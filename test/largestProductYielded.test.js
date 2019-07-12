const { largestProductYielded } = require('../lib/largestProductYielded');

describe('largestProductYielded', () => {
  it('returns a number', () => {
    const result = largestProductYielded([10, 1, 2, 11, -20, 8, 3, -11, -10, 4, 5]);
    expect(result).toEqual(expect.any(Number));
  });

  it('returns the largest product when negatives are necessary', () => {
    const result = largestProductYielded([-10, 7, 29, 30, 5, -10, -70]);
    expect(result).toEqual(21000);
  });

  it('returns the largest product when negatives are not necessary', () => {
    const result = largestProductYielded([5, 10, 3, -1, 2, -3, -4, 8]);
    expect(result).toEqual(400);
  });
});
