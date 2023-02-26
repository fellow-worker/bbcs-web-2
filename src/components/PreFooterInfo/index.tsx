import React from 'react';
import Columns, { Column } from 'components/Columns';
import Text from 'components/Text';
import Block from 'components/Block';
import Paragraph from 'components/Paragraph';
import { Link } from 'react-router-dom';
import SubscribeNewsletterForm from 'components/PreFooterInfo/SubscribeNewsletterForm';

const PreFooterInfo = () => (
  <Block>
    <Columns gap={80} count={3}>
      <Column>
        <Text variant="h3">Curriculum</Text>
        <Paragraph>
          Speciaal voor jou hebben wij een lijst van curricula gemaakt.
          Per niveau zijn er passende cursussen toegevoegd en als je een curriculum
          hebt gevolgd kan je doorstromen naar een hoger niveau. Bekijk de <Link to="/curricula">curricula.</Link>
        </Paragraph>
      </Column>
      <Column>
        <Text variant="h3">Donaties</Text>
        <Paragraph>
          Alle onze cursussen zijn gratis omdat we geloven dat verdieping in Gods woord
          voor iedereen toegankelijk moet zijn. We bestaan dus volledig door giften.
          Zou jij ons willen steunen door een donatie te geven? Lees dan de <Link to="/curricula">mogelijkheden.</Link>
        </Paragraph>
      </Column>
      <Column>
        <Text variant="h3">Nieuwsbrief</Text>
        <Paragraph>
          Wil je op de hoogte blijven over de nieuwe cursussen en ander
          nieuws vanuit Bijbelcursussen.nl? Meld je dan aan voor onze nieuwsbrief.
        </Paragraph>
        <SubscribeNewsletterForm />
      </Column>
    </Columns>
  </Block>
);

export default PreFooterInfo;
