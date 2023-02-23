import React, { ReactElement } from 'react';
import Block from 'components/Block';
import OurStory from 'pages/public/home/OurStory';
import Blogs from 'pages/public/home/Blogs';
import Mission from 'pages/public/home/Mission';
import MainLayout from 'components/MainLayout';
import Instructions from 'pages/public/home/Instructions';

export const Home = (): ReactElement => (
  <MainLayout fill="student-in-shop" condensed>
    <OurStory />
    <Mission />
    <Instructions />
    <Blogs />
    <Block />
  </MainLayout>
);

export default Home;
