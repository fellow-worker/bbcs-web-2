import { ValidationError } from 'util/validator/ValidationErrors';

interface ValidationResult {
  valid: boolean,

  errors: ValidationError[]
}

export default ValidationResult;
