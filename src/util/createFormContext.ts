import React from 'react';
import FormContext from 'types/FormContext';
import ValidationResult from 'types/ValidationResult';

function createFormContext<T>() {
  const form = {
    data: undefined,
    setData: () => undefined,
    validate: async () => ({ valid: false, errors: [] } as ValidationResult),
    validationResult: undefined,
    submit: async () => false,
  };
  return React.createContext<FormContext<T>>(form);
}

export default createFormContext;
