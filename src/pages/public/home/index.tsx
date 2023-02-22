import React, { ReactElement } from 'react';
import Header from 'components/Header';
import Text from 'components/Text';
import TextBlock from 'components/TextBlock';
import Paragraph from 'components/Paragraph';
import Jumbotron from 'components/Jumbotron';
import Statement from 'components/Statement';
import Block from 'components/Block';

export const Home = (): ReactElement => (
  <>
    <Header fill="student-in-shop" condensed />

    <Text variant="h1">Groeien in verbinding</Text>
    <TextBlock>
      <Paragraph>
        De website is niet aan één bepaalde denominatie gebonden. Zowel de schrijvers van de
        cursussen als de medewerkers van de Bijbelcursussen zijn niet gebonden aan één bepaalde
        denominatie en komen van verschillende kerkrichtingen en achtergronden. Het is ons
        verlangen om iedereen – los van afkomst op opleiding – in staat te stellen om de Bijbel
        beter te leren kennen en ook om te groeien in het geloof (Efeze 4:13-15).
      </Paragraph>
      <Paragraph>
        Het hoofddoel van de cursussen is behulpzaam zijn bij en aanmoedigen van persoonlijke
        bestudering van Gods Woord om zo te komen tot een diepere geestelijke volwassenheid
        en een betere toerusting tot de dienst aan God.
      </Paragraph>
      <Paragraph>
        Bij het maken van een cursus, word je gekoppeld aan een mentor. De mentoren zijn afkomstig
        van diverse denominaties, maar hebben allemaal één gezamenlijk verlangen: ‘Dat Christus
        meer gestalte krijgt in de studenten’ (Galaten 4:19).
      </Paragraph>
      <Paragraph>
        De focus bij deze cursussen ligt op het kennen van Christus als onze Verlosser, maar wil ons
        ook helpen om Hem na te volgen als onze Meester. Weet jij een goed boek of cursus waarin het
        niet gaat om mij, mijn kerk, mijn leer, maar om het kennen en navolgen van Christus
        (Filippi 3:8)? Neem dan contact op met info@bijbelcursussen.nl zodat we kunnen kijken of
        deze cursus ook op de site geplaatst kan worden.
      </Paragraph>
    </TextBlock>

    <Jumbotron header="Ons verlangen">
      <Statement>Wij hebben het verlangen dat mensen groeien in het geloof,</Statement>
      <Statement>in verbinding met elkaar en in diepe verbondenheid met God.</Statement>
    </Jumbotron>

    <Text variant="h1">Hoe het werkt</Text>
    <Block>
      test
    </Block>

    <Jumbotron fill="bible-study" header="Onze inzichten in blogs" />
  </>
);

export default Home;
