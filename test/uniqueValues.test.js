const { uniqueValues } = require('../lib/uniqueValues');

describe('uniqueValues', () => {
  it('returns an array', () => {
    const result = uniqueValues([1, 2, 3, 4, 5]);
    expect(result).toEqual(expect.any(Array));
  });
});
