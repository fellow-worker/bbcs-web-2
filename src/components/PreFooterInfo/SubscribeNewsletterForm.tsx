import Validator from 'util/validator';
import Form from 'components/Form';
import React from 'react';
import SubscribeNewsletterContext from './SubscribeNewsletterContext';
import SubscribeNewsletter from './SubscribeNewsletter';
import FormContent from './FormContent';

const SubscribeNewsletterForm = () => {
  const initialValue = { name: '', email: '' };

  const onSave = (value: SubscribeNewsletter) => {
    console.log(value);
  };

  return (
    <Form
      context={SubscribeNewsletterContext}
      validator={validator}
      initialValue={initialValue}
      save={onSave}
    >
      <FormContent />
    </Form>
  );
};

export default SubscribeNewsletterForm;

const validator = new Validator();

validator
  .prop('name')
  .string()
  .minLength(2, 'Een naam bevat tenminste 2 tekens.')
  .maxLength(255, 'Een naam kan maximaal 255 tekens bevatten.')
  .required('Geef de naam van de ontvanger van de nieuwsbrief op.');

validator
  .prop('email')
  .string()
  .mail('Geef een geldig e-mailadres op.')
  .required('Geef het e-mailadres op van de ontvanger.');
