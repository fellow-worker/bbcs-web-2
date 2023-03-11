import useForm from 'hooks/useForm';
import SubscribeNewsletterContext from 'components/PreFooterInfo/SubscribeNewsletterContext';
import TextBox from 'components/TextBox';
import React from 'react';
import Button from 'components/Button';
import { Forward } from 'icons';
import styled from 'styled-components';

const FormContent = () => {
  const { data, setData, submit } = useForm(SubscribeNewsletterContext);
  if (data === undefined) return null;

  return (
    <>
      <TextBox
        property="name"
        placeholder="Naam"
        value={data.name}
        onChange={name => setData({ ...data, name })}
        tabIndex={-2}
        context={SubscribeNewsletterContext}
        showErrors={false}
      />
      <Group>
        <TextBox
          property="email"
          placeholder="E-mailadres"
          value={data.email}
          onChange={email => setData({ ...data, email })}
          tabIndex={-1}
          context={SubscribeNewsletterContext}
          showErrors={false}
        />
        <Button
          icon={<Forward />}
          color="gray"
          onClick={submit}
          size="small"
        />
      </Group>
    </>
  );
};

const Group = styled.div`
  display: flex;

  button {
    margin: 4px 0 4px 4px;
  }
`;

export default FormContent;
