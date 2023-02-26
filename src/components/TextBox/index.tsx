import FormContext from 'types/FormContext';
import useForm from 'hooks/useForm';
import React, { Context } from 'react';
import styled from 'styled-components';

interface TextBoxProps<T> {
  property: string,
  placeholder: string,
  value: string | undefined | null,
  context?: Context<FormContext<T>>
  onChange: (value: string) => any
  tabIndex?: number
}

const TextBox = (props: TextBoxProps<unknown>) => {
  const { property, placeholder, value, context, onChange, tabIndex } = props;
  const errors = useErrors(context, property);
  console.log(errors === null);

  return (
    <Input
      onChange={event => onChange(event.target.value)}
      placeholder={placeholder}
      value={value ?? ''}
      tabIndex={tabIndex}
    />
  );
};

const useErrors = (context: Context<FormContext<unknown>> | undefined, property: string) => {
  if (!context) return [];
  const { validationResult } = useForm(context);
  return validationResult?.errors?.filter(e => e.property === property) ?? [];
};

const Input = styled.input`
  width: 100%;
  height: 39px;
  border: 1px solid ${p => p.theme.colors.gray};
  color: ${p => p.theme.colors.text};
  box-sizing: border-box;
  border-radius: 8px;
  padding: 4px 16px;
  font-size: 16px;
  margin: 4px 0;

  &:focus {
    outline: none;
    border: 1px solid ${p => p.theme.colors.blue};
    color: ${p => p.theme.colors.blue};
  }

  &::placeholder {
    color: ${p => p.theme.colors.gray};
  }
`;

export default TextBox;
