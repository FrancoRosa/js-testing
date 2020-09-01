import capitalize from './capitalize'

describe('Capitalize', () => {
  test('Capitalizes a lowercase string', () => {
    expect(capitalize('lowercase')).toEqual('Lowercase')
  })

  test('Does nothing if the string is already capitalized', () => {
    expect(capitalize('Capitalized')).toEqual('Capitalized')
  })

  test('Capitalizes an uppercase string', () => {
    expect(capitalize('UPPERCASE')).toEqual('Uppercase')
  })

  test('Capitalizes every word in a string', () => {
    expect(capitalize('every word')).toEqual('Every Word')
  })

  test('Does not crash if string is empty', () => {
    expect(capitalize('')).toEqual('')
  })

  test('Does not crash if special characters', () => {
    expect(capitalize('12ba $asd & z')).toEqual('12ba $asd & Z')
  })

})