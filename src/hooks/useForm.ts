import { Context, useContext } from 'react';
import FormContext from 'types/FormContext';

function useForm<T>(context: Context<FormContext<T>>) {
  return useContext(context);
}

export default useForm;
