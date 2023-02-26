import React, { Context, PropsWithChildren } from 'react';
import FormContext from 'types/FormContext';

interface FormProviderProps<T> {
  state: FormContext<T>,
  context: Context<FormContext<T>>,
}

function FormProvider<T>(props: PropsWithChildren<FormProviderProps<T>>) {
  const { state, context, children } = props;
  return <context.Provider value={state}>{children}</context.Provider>;
}

export default FormProvider;
