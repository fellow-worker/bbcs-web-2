import React, { FC, PropsWithChildren } from 'react';
import Header from 'components/Header';
import Footer from 'components/Footer';

interface MainLayoutProp {
  fill?: string,
  condensed?: boolean
}

const MainLayout: FC<PropsWithChildren<MainLayoutProp>> = (props) => {
  const { fill, condensed, children } = props;
  return (
    <>
      <Header fill={fill} condensed={condensed} />
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;
