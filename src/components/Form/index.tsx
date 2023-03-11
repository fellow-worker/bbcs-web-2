import React, { Context, PropsWithChildren, useState } from 'react';
import FormContext from 'types/FormContext';
import ValidationResult from 'types/ValidationResult';
import Validator from 'util/validator';
import FormProvider from './FormProvider';

interface FormProps<T> {
  context: Context<FormContext<T>>,
  validator: Validator,
  initialValue: T | undefined,
  save: (data: T) => any
}

function Form<T>(props: PropsWithChildren<FormProps<T>>) {
  const { children, context, initialValue, validator, save } = props;
  const [data, setData] = useState(initialValue);
  const [validationResult, setValidationResult] = useState<ValidationResult>();

  const validate = async () => {
    if (!data) {
      setValidationResult(undefined);
      return { valid: false, errors: [] } as ValidationResult;
    }

    const errors = await validator.validate(data);
    const result = { valid: errors.length === 0, errors } as ValidationResult;
    setValidationResult(result);
    return result;
  };

  const submit = async () => {
    if (!data) return false;
    const result = await validate();
    setValidationResult(result);
    if (result.valid) return save(data);
    return false;
  };

  const state = { data, validate, setData, submit, validationResult };
  return (
    <FormProvider state={state} context={context}>
      {children}
    </FormProvider>
  );
}

export default Form;
