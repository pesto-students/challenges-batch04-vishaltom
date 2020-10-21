// write your own test cases
import { flipArgs } from './flipArgs';

describe('limitFunctionCallCount', () => {
  it('should return a function', () => {
    expect(typeof flipArgs()).toBe('function');
  });
  it('should return flipped arguments', () => {
    const fetchArguments = (...args) => args;
    const flipped = flipArgs(fetchArguments);
    expect(flipped('a', 'b', 'c', 'd')).toEqual(['d', 'c', 'b', 'a']);
  });
});
