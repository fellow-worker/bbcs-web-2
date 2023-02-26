import { NumberValidator } from './NumberValidator';

describe('min', () => {
  const min = async (test: any, minValue: number, expected: number) => {
    const validator = new NumberValidator('test');
    validator.min(minValue);
    const errors = await validator.validate(test);
    expect(errors).toHaveLength(expected);
  };

  test('min number bigger', async () => min({ test: 17 }, 23, 1));
  test('min number smaller', async () => min({ test: 31 }, 23, 0));
  test('min number equal', async () => min({ test: 23 }, 23, 0));
  test('null', async () => min({ test: null }, 23, 0));
});

describe('max', () => {
  const max = async (test: any, maxValue: number, expected: number) => {
    const validator = new NumberValidator('test');
    validator.max(maxValue);
    const errors = await validator.validate(test);
    expect(errors).toHaveLength(expected);
  };

  test('max number bigger', async () => max({ test: 17 }, 23, 0));
  test('max number smaller', async () => max({ test: 31 }, 23, 1));
  test('max number equal', async () => max({ test: 23 }, 23, 0));
  test('null', async () => max({ test: null }, 23, 0));
});

describe('range', () => {
  const range = async (test: any, min: number, max: number, expected: number) => {
    const validator = new NumberValidator('test');
    validator.range(min, max);
    const errors = await validator.validate(test);
    expect(errors).toHaveLength(expected);
  };

  test('lower then min', async () => range({ test: 17 }, 23, 31, 1));
  test('within rage', async () => range({ test: 23 }, 17, 31, 0));
  test('higher then max', async () => range({ test: 31 }, 17, 23, 1));
  test('null', async () => range({ test: null }, 17, 31, 0));
  test('not in object', async () => range({}, 17, 31, 0));
});

describe('checkType', () => {
  const checkType = (value: any) => {
    try {
      const validator = new NumberValidator('test');
      validator.checkType(value);
      return true;
    } catch {
      return false;
    }
  };

  test('null', () => expect(checkType(null)).toBe(true));
  test('correct type', () => expect(checkType(18)).toBe(true));
  test('wrong type', () => expect(checkType('string')).toBe(false));
});
