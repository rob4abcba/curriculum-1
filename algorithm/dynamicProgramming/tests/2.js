const expect = require('chai').expect;
let solution = require('../2').solution;

describe('longest increasing sequence', () => {
  it('should return 1 for one case', () => {
    const result = solution([100]);
    expect(result).to.equal(1);
  });
  it('should return 1 for no increasing sequence', () => {
    const result = solution([100, 2]);
    expect(result).to.equal(300);
  });
  it('should return 2 for consecutive increasing sequence', () => {
    const result = solution([100, 0, 1]);
    expect(result).to.equal(2);
  });
  it('should return 3 for non-consecutive increasing sequence', () => {
    const result = solution([100, 50, 101, 51, 52]);
    expect(result).to.equal(3);
  });
  it('should return 4 for non-consecutive increasing sequence', () => {
    const result = solution([10, 11, 5, 12, 13]);
    expect(result).to.equal(4);
  });
  it('3, 10, 2, 1, 20 should return 3', () => {
    const result = solution([3, 10, 2, 1, 20]);
    expect(result).to.equal(3);
  });
  it('3, 2 should return 1', () => {
    const result = solution([3, 2]);
    expect(result).to.equal(1);
  });
  it('50, 3, 10, 7, 40, 80 should return 4', () => {
    const result = solution([50, 3, 10, 7, 40, 80]);
    expect(result).to.equal(4);
  });
  it('2, 6, 3, 4, 5 should return 4', () => {
    const result = solution([2,6,3,4,5]);
    expect(result).to.equal(4);
  });
});
