import { BooleanValidator } from './BooleanValidator';

describe('checkType', () => {
  const checkType = (value: any) => {
    try {
      const validator = new BooleanValidator('test');
      validator.checkType(value);
      return true;
    } catch {
      return false;
    }
  };

  test('null', () => expect(checkType(null)).toBe(true));
  test('correct type', () => expect(checkType(false)).toBe(true));
  test('wrong type', () => expect(checkType('string')).toBe(false));
});

describe('required', () => {
  const required = async (test: any, expected: number) => {
    const validator = new BooleanValidator('test');
    validator.required();
    const errors = await validator.validate(test);
    expect(errors).toHaveLength(expected);
  };

  test('null', async () => required({ test: null }, 1));
  test('undefined', async () => required({ test: undefined }, 1));
  test('not in object', async () => required({}, 1));
  test('false', async () => required({ test: false }, 0));
  test('true', async () => required({ test: true }, 0));
});
