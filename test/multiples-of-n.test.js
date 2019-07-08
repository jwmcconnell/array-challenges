const { multiplesOfN } = require('../index');

describe('multiplesOfN', () => {
  it('returns an array', () => {
    const result = multiplesOfN(5);
    expect(result).toEqual(expect.any(Array));
  });
});
