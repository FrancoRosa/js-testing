import reverseString from './reverseString';

describe('reverseString', () => {
  it('reverses a string', () => {
    expect(reverseString('abc123')).toEqual('321cba');
  });

  it('returns an empty string when the parameter is an empty string', () => {
    expect(reverseString('')).toEqual('');
  });

  it('returns the same string when parameter is a single character', () => {
    expect(reverseString('a')).toEqual('a');
  });

  it('throws an error when parameter is not a string', () => {
    expect(() => {
      reverseString(1);
    }).toThrow('Invalid parameter');
  });
});