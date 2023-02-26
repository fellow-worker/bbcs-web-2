import useForm from 'hooks/useForm';
import SubscribeNewsletterContext from 'components/PreFooterInfo/SubscribeNewsletterContext';
import TextBox from 'components/TextBox';
import React from 'react';

const FormContent = () => {
  const { data, setData } = useForm(SubscribeNewsletterContext);
  if (data === undefined) return null;

  return (
    <>
      <TextBox
        property="name"
        placeholder="Naam"
        value={data.name}
        onChange={name => setData({ ...data, name })}
        tabIndex={-2}
      />
      <TextBox
        property="email"
        placeholder="E-mailadres"
        value={data.email}
        onChange={email => setData({ ...data, email })}
        tabIndex={-1}
      />
    </>
  );
};

export default FormContent;
