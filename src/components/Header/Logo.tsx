import styled from 'styled-components';
import React from 'react';

const Logo = () => (
  <LogoBox>
    <img alt="Bijbel Cursussen Nederland" src="/images/logos/logo_header.nl.png" />
  </LogoBox>
);

const LogoBox = styled.div`
  flex-grow: 4;
  flex-shrink: 4;
  flex-basis: 410px;
  background-image: url('/images/shapes/ellipse_white.png');
  background-repeat: no-repeat;
  background-position: right 0;
  max-width: 595px;
  display: flex;
  user-select: none;

  justify-items: right;
  justify-content: right;

  img {
    width: 200px;
    height: 52px;
    padding-top: 32px;
    padding-right: 150px;
  }
`;

export default Logo;
