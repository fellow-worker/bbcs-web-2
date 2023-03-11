import styled from 'styled-components';
import React from 'react';

const Logo = () => (
  <Container>
    <LogoBox>
      <img alt="Bijbel Cursussen Nederland" src="/images/logos/logo_header.nl.png" />
    </LogoBox>
  </Container>
);

const Container = styled.div`
  user-select: none;
  position: absolute;
  z-index: 2;
  height: 100px;
  max-width: 595px;
  min-width: 290px;
  top:60px;
  width:35vw;
  display: flex;
  justify-content: right;

`;

const LogoBox = styled.div`
  display: flex;
  justify-content: right;
  align-items: flex-end;
  flex-direction: column;
  width: 100%;


  img {
    height: 52px;
    margin-top: -32px;

  }

  @media (min-width: ${p => p.theme.screens.small}px) {
    background-image: url('/images/shapes/ellipse_white.png');
    background-repeat: no-repeat;
    background-position: right 0;
    width: 100%;

    background-color: transparent;

    img {
      width: 200px;
      height: 52px;
      margin-right: 60px;
    }
  }


`;

export default Logo;
