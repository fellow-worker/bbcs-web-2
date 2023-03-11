import styled from 'styled-components';
import React from 'react';
import { Link } from 'react-router-dom';
import useConfig from 'hooks/useConfig';

const Footer = () => {
  const year = new Date().getFullYear();
  const config = useConfig();
  return (
    <Container>
      <Box>
        <InfoBox align="left">
          <div>© 2011-{year} {config.name}&nbsp;</div>
          <div>Alle rechten voorbehouden.</div>
        </InfoBox>
        <InfoBox align="right">
          <div><Link to="/info/gebruikersvoorwaarden">Gebruikersvoorwaarden</Link></div>
          <Separate> / </Separate>
          <div><Link to="/info/privacy">Privacy</Link></div>
        </InfoBox>
      </Box>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  justify-items: center;
  background-color: ${p => p.theme.colors.gray};
  color: ${p => p.theme.colors.background};
`;

const Box = styled.div`
  max-width: ${p => p.theme.maxWidth}px;
  width: 100%;
  box-sizing: border-box;
  padding-top: 20px;
  line-height: 16px;

  a {
    color: ${p => p.theme.colors.background};
    text-decoration: none;
  }

  a:hover {
    text-shadow: 0 0 .9px currentColor, 0 0 .9px currentColor, 0 0 .9px currentColor;
  }

  @media (min-width: ${p => p.theme.screens.small}px) {
    display: flex;
    flex-direction: row;
  }
`;

const InfoBox = styled.div<{align: 'left' | 'right'}>`
  text-align: center;
  padding-bottom: 20px;
  font-weight: 300;
  font-size: 14px;

  @media (min-width: ${p => p.theme.screens.small}px) {
    display: flex;
    flex: 0 0 50%;
    max-width: 525px;
    justify-content: ${p => (p.align === 'left' ? 'flex-start' : 'flex-end')};
    padding-left: ${p => (p.align === 'left' ? 25 : 0)}px;
    padding-right: ${p => (p.align === 'left' ? 0 : 25)}px;
    box-sizing: border-box;
  }

  @media (min-width: ${p => p.theme.screens.medium}px) {
    padding-left: 0;
    padding-right: 0;
  }
`;

const Separate = styled.div`
  padding: 0 8px;
  display: none;
  @media (min-width: ${p => p.theme.screens.small}px) {
    display: inherit;
  }
`;

export default Footer;