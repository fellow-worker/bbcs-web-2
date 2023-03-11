import React from 'react';
import styled from 'styled-components';
import Button from 'components/Button';
import NavItem from './Menu';
import menuItems from './menuItems';

const Navbar = () => (
  <Container>
    <LogoSpacer />
    {menuItems.map(m => <NavItem key={m.id} {...m} />)}
    <Spacer />
    <LogonButton>
      <Button label="Inloggen" color="blue" />
    </LogonButton>
  </Container>
);

const LogoSpacer = styled.div`

  @media (min-width: ${p => p.theme.screens.small}px) {
    max-width: 595px;
    user-select: none;
    flex: 1 1 290px;
    margin-right: -40px;
  }

  @media (min-width: 900px) {
    margin-right: -25px;
  }
`;

const Container = styled.nav`
  height: 60px;
  width: 100%;

  @media (min-width: ${p => p.theme.screens.small}px) {
    display: flex;
  }

  position: absolute;
  background-color: ${p => p.theme.colors.background};
`;

const Spacer = styled.div`
  flex: auto;
  background-color: ${p => p.theme.colors.background};
  height: 60px;
  display: none;

  @media (min-width: ${p => p.theme.screens.small}px) {
    display: inherit;
  }
`;

const LogonButton = styled.div`

  top: 0;
  position: absolute;
  right: 0;


  button {
    border-radius: 0 0 0 12px;
  }

  @media (min-width: ${p => p.theme.screens.small}px) {
    top: 40px;
    right: 50px;

    button {
      border-radius: 12px;
    }
  }


  z-index: 2;


  @media (min-width: 1000px) {
    right: 75px;
  }
`;

export default Navbar;