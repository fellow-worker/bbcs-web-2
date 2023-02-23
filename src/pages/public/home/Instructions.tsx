import Text from 'components/Text';
import React from 'react';
import Columns, { Column } from 'components/Columns';
import Step from 'pages/public/home/Step';
import Block from 'components/Block';

const Instructions = () => (
  <Block>
    <Text variant="h1">Hoe het werkt</Text>
    <Columns>
      <Column>
        <Step header="Kies een cursus en meld je aan" icon="register">
          <Text>
            Hier leggen jullie in 5 eenvoudige zinnen uit, wat er gebeurd bij deze stap.
            Elke tiener zou dit moeten snappen en niet alleen een hoog
            leraar. Let dus ook echt op jullie woordgebruik.
          </Text>
        </Step>
      </Column>
      <Column>
        <Step header="Je wordt gekoppeld aan een mentor en doorloopt de cursus" icon="together">
          <Text>
            Hier leggen jullie in 5 eenvoudige zinnen uit, wat er gebeurd bij deze stap.
            Elke tiener zou dit moeten snappen en niet alleen een hoog
            leraar. Let dus ook echt op jullie woordgebruik.
          </Text>
        </Step>
      </Column>
      <Column>
        <Step header="Je rond de cursus af en ontvangt een certificaat" icon="certificate">
          <Text>
            Hier leggen jullie in 5 eenvoudige zinnen uit, wat er gebeurd bij deze stap.
            Elke tiener zou dit moeten snappen en niet alleen een hoog
            leraar. Let dus ook echt op jullie woordgebruik.
          </Text>
        </Step>
      </Column>
    </Columns>
  </Block>
);

export default Instructions;