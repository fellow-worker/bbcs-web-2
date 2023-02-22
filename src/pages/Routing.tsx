import { Route, Routes } from 'react-router-dom';
import React, { type ReactElement } from 'react';

const Home = React.lazy(async () => import('./public/home'));

export const Routing = (): ReactElement => (
  <Routes>
    <Route path="*" element={<Home />} />
  </Routes>
);
