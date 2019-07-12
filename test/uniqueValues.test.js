const { uniqueValues } = require('../lib/uniqueValues');

describe('uniqueValues', () => {
  it('returns an array', () => {
    const result = uniqueValues([1, 2, 3, 4, 5]);
    expect(result).toEqual(expect.any(Array));
  });

  it('returns an array with only the unique values from the original', () => {
    const result = uniqueValues([3, 3, 5, 3, 12, 7]);
    expect(result).toEqual([3, 5, 12, 7]);
  });
});
