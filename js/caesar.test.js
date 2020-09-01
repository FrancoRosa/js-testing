import caesar from './caesar';

describe('Caesar', () => {
  it('chiphers a string with the provided key', () => {
    expect(caesar('abcd', 1)).toEqual('bcde');
  });

  it('ignores non alphabetic characters when calculating cipher', () => {
    expect(caesar('caesar test $&', 1)).toEqual('dbftbs uftu $&');
  });

  it('returns an empty string when an empty string is provided', () => {
    expect(caesar('', 0)).toEqual('');
  });

  it('returns the same string when key equals 0', () => {
    expect(caesar('test', 0)).toEqual('test');
  });

  it('throws an error when text is not a string', () => {
    expect(() => {
      caesar(12345, 1);
    }).toThrow('text should be a string');
  });

  it('ciphers strings containing uppercase and lowercase values', () => {
    expect(caesar('MultiCase', 1)).toEqual('NvmujDbtf');
  });

  it('ciphers uppercase text', () => {
    expect(caesar('UPPERCASE', 1)).toEqual('VQQFSDBTF');
  });

  it('throws an error when key is not a string', () => {
    expect(() => {
      caesar('test', 'a');
    }).toThrow('key should be a number');
  });
});