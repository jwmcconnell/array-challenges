const { multiplesOfN } = require('../index');

describe('multiplesOfN', () => {
  it('returns an array', () => {
    const result = multiplesOfN(5);
    expect(result).toEqual(expect.any(Array));
  });

  it('returns all multiples of 5 under 100', () => {
    const result = multiplesOfN(5);
    expect(result).toEqual([5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100]);
  });

  it('returns all multiples of 15 under 100', () => {
    const result = multiplesOfN(15);
    expect(result).toEqual([15, 30, 45, 60, 75, 90]);
  });

  it('returns all mutiples of 113 under 100', () => {
    const result = multiplesOfN(113);
    expect(result).toEqual([]);
  });
});
