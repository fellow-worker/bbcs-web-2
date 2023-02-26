export const isString = (value: any) => typeof value === 'string' || value instanceof String;

export const MaxLength = (length: number) => (value: any) => {
  if (value === null || value === undefined) return true;
  if (value as string) return value.length <= length;
  return true;
};

export const MinLength = (length: number) => (value: any) => {
  if (value === null || value === undefined) return true;
  if (value as string) return value.length >= length;
  return true;
};

export const Required = (value: any) => value !== null && value !== undefined && value !== '';

export const Range = (min: number, max: number) => (value: any) => {
  if (value === null || value === undefined) return true;
  return MaxLength(max)(value) && MinLength(max)(value);
};

export const Regexp = (regexp: RegExp) => (value: any) => {
  if (value === null || value === undefined) return true;
  if (value as string) {
    return regexp.test(value);
  }
  return true;
};

export const isEmpty = (value: string | undefined | null) => !(value && value !== '');

export const isNullOrUndefined = (value: any) => value === undefined || value === null;

export const isDefined = (value: any) => value !== undefined && value !== null;
