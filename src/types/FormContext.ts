import ValidationResult from 'types/ValidationResult';

interface FormContext<T> {
  data: T | undefined
  setData: (data: T) => any
  validate: () => Promise<ValidationResult>
  submit: () => any
  validationResult: ValidationResult | undefined
}

export default FormContext;
