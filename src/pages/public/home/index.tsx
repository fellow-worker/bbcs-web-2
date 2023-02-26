import React, { ReactElement } from 'react';
import OurStory from 'pages/public/home/OurStory';
import Blogs from 'pages/public/home/Blogs';
import Mission from 'pages/public/home/Mission';
import MainLayout from 'components/MainLayout';
import Instructions from 'pages/public/home/Instructions';
import PreFooterInfo from 'components/PreFooterInfo';

export const Home = (): ReactElement => (
  <MainLayout fill="student-in-shop" condensed>
    <OurStory />
    <Mission />
    <Instructions />
    <Blogs />
    <PreFooterInfo />
  </MainLayout>
);

export default Home;
