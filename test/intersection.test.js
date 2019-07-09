const { intersection } = require('../lib/intersection');

describe('intersection', () => {
  it('returns an array', () => {
    const result = intersection([2, 2, 4, 1], [1, 2, 0, 2]);
    expect(result).toEqual(expect.any(Array));
  });

  it('returns an the intersection of two arrays', () => {
    const result = intersection([2, 2, 4, 1], [1, 2, 0, 2]);
    expect(result).toEqual([2, 1]);
  });
});

