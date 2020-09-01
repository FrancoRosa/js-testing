import calculator from './calculator';


describe('Calculator', () => {
  describe('Add', () => {
    test('should add two values', () => {
      expect(calculator.add(1, 1)).toEqual(2);
    });

    test('should trow an error if not enough params', () => {
      expect(() => {
        calculator.add(1);
      }).toThrow('Not numeric parameters or missing');
    });

    test('should trow an error if params are not numbers', () => {
      expect(() => {
        calculator.add('z', 1);
      }).toThrow('Not numeric parameters or missing');
    });
  });

  describe('Subtract', () => {
    test('should subtract two values', () => {
      expect(calculator.subtract(1, 1)).toEqual(0);
    });

    test('should trow an error if not enough params', () => {
      expect(() => {
        calculator.subtract(1);
      }).toThrow('Not numeric parameters or missing');
    });

    test('should trow an error if params are not numbers', () => {
      expect(() => {
        calculator.subtract('z', 1);
      }).toThrow('Not numeric parameters or missing');
    });
  });

  describe('Divide', () => {
    test('should divide two values', () => {
      expect(calculator.divide(1, 1)).toEqual(1);
    });

    test('should return infinity if b is zero', () => {
      expect(calculator.divide(1, 0)).toEqual(Infinity);
    });

    test('should trow an error if not enough params', () => {
      expect(() => {
        calculator.divide(1);
      }).toThrow('Not numeric parameters or missing');
    });

    test('should trow an error if params are not numbers', () => {
      expect(() => {
        calculator.divide('z', 1);
      }).toThrow('Not numeric parameters or missing');
    });
  });

  describe('Multiply', () => {
    test('should multiply two values', () => {
      expect(calculator.multiply(2, 3)).toEqual(6);
    });

    test('should trow an error if not enough params', () => {
      expect(() => {
        calculator.multiply(1);
      }).toThrow('Not numeric parameters or missing');
    });

    test('should trow an error if params are not numbers', () => {
      expect(() => {
        calculator.multiply('z', 1);
      }).toThrow('Not numeric parameters or missing');
    });
  });
});