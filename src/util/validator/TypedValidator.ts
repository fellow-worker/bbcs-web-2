import { ValidationError } from './ValidationErrors';
import { ValidationRule } from './ValidationRule';
import { isString } from './utils';

export abstract class TypedValidator {
  protected rules: ValidationRule[];

  constructor(protected name: string) {
    this.rules = [] as ValidationRule[];
  }

  required = (message?: string) => {
    const method = async (value: any) => value !== undefined && value !== null;
    this.rules.push({ method, message });
    return this;
  };

  custom = (method: (value: any, item?: any) => Promise<boolean>, message?: string) => {
    this.rules.push({ method, message });
    return this;
  };

  public validate = async (item: any) => {
    const value = this.getValue(item);
    this.checkType(value);

    const errors = [] as ValidationError[];

    await Promise.all(this.rules.map(async (rule) => {
      const isValid = await rule.method(value, item);

      if (isValid) return;

      const message = this.getMessage(rule, value);

      errors.push({ property: this.name, message });
    }));

    return errors;
  };

  private getMessage(rule: ValidationRule, value: any) {
    const { message } = rule;
    if (message === null || message === undefined) return null;
    return isString(message) ? message : (message as Function)(this.name, value);
  }

  abstract checkType(value: any): void;

  private getValue = (item: any) => item[this.name];
}
