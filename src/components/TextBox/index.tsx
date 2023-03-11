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
  tabIndex?: number,
  showErrors?: boolean
}

const TextBox = (props: TextBoxProps<any>) => {
  const { property, placeholder, value, context, onChange, showErrors, tabIndex } = props;
  const errors = useErrors(context, property);
  const hasErrors = errors.length !== 0;
  return (
    <div>
      <Input
        onChange={event => onChange(event.target.value)}
        placeholder={placeholder}
        value={value ?? ''}
        tabIndex={tabIndex}
        hasError={hasErrors}
      />
      {showErrors !== false && hasErrors && <ErrorMessage>{errors[0].message}</ErrorMessage>}
    </div>
  );
};

const useErrors = (context: Context<FormContext<unknown>> | undefined, property: string) => {
  if (!context) return [];
  const { validationResult } = useForm(context);
  return validationResult?.errors?.filter(e => e.property === property) ?? [];
};

const ErrorMessage = styled.div`
  color: ${p => p.theme.colors.error};
  font-size: 12px;
`;

const Input = styled.input<{ hasError: boolean }>`
  width: 100%;
  height: 40px;
  border: 1px solid ${p => (p.hasError ? p.theme.colors.error : p.theme.colors.gray)};
  color: ${p => (p.hasError ? p.theme.colors.error : p.theme.colors.text)};
  box-sizing: border-box;
  border-radius: 8px;
  padding: 4px 16px;
  font-size: 16px;
  margin: 4px 0;

  &:focus {
    outline: none;
    border: 1px solid ${p => (p.hasError ? p.theme.colors.error : p.theme.colors.blue)};
    color: ${p => (p.hasError ? p.theme.colors.error : p.theme.colors.blue)};
  }

  &::placeholder {
    color: ${p => (p.hasError ? p.theme.colors.error : p.theme.colors.gray)};
  }
`;

export default TextBox;
