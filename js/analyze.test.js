
import analyze from './analyze';

describe('Analize', () => {
  test('should throw an error if any of the imput are not numbers', () => {
    expect(() => {
      analyze([1, 2, 'a']);
    }).toThrow('Invalid data');
  });

  test('should return null no parameters asign', () => {
    expect(analyze()).toEqual(null);
  });

  describe('Average', () => {
    test('should calculate the average', () => {
      expect(analyze([1, 2, 3]).average).toEqual(2);
    });
    test('should return the same value if the array contains one element', () => {
      expect(analyze([1]).average).toEqual(1);
    });
    test('should return null if the array is empty', () => {
      expect(analyze([]).average).toEqual(null);
    });
  });

  describe('Min', () => {
    test('should calculate the minimun', () => {
      expect(analyze([1, 2, 3]).min).toEqual(1);
    });
    test('should return null if the array is empty', () => {
      expect(analyze([]).min).toEqual(null);
    });
  });

  describe('Max', () => {
    test('should calculate the maximun', () => {
      expect(analyze([1, 2, 3]).max).toEqual(3);
    });
    test('should return null if the array is empty', () => {
      expect(analyze([]).max).toEqual(null);
    });
  });

  describe('length', () => {
    test('should calculate the length of the array', () => {
      expect(analyze([1, 2, 3, 0]).length).toEqual(4);
    });
    test('should calculate the length of an empty array', () => {
      expect(analyze([]).length).toEqual(0);
    });
  });
});

