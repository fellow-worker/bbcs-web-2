import React, { ReactElement } from 'react';
import OurStory from 'pages/public/home/OurStory';
import MainLayout from 'components/MainLayout';
import Mission from './Mission';
import Instructions from './Instructions';

export const Home = (): ReactElement => (
  <MainLayout fill="student-in-shop" condensed>
    <OurStory />
    <Mission />
    <Instructions />
  </MainLayout>
);

export default Home;
