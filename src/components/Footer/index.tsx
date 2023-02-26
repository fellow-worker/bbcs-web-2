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
        <div>
          © 2011-{year} {config.name}, Alle rechten voorbehouden.
        </div>
        <div>
          <Link to="/info/gebruikersvoorwaarden">Gebruikersvoorwaarden</Link>
          &nbsp;/&nbsp;
          <Link to="/info/privacy">Privacy</Link>
        </div>
      </Box>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  justify-items: center;
  background-color: ${p => p.theme.colors.gray};
  height: 56px;
  color: ${p => p.theme.colors.background};
  line-height: 56px;
  font-weight: 300;
  font-size: 14px;
`;

const Box = styled.div`
  display: flex;
  max-width: ${p => p.theme.maxWidth}px;
  width: 100%;

  div:first-child {
    text-align: left;
    flex: 1 1 auto;
    padding-left: 50px;
  }

  div:last-child {
    text-align: right;
    flex: 1 1 auto;
    padding-right: 50px;
  }

  a {
    color: ${p => p.theme.colors.background};
    text-decoration: none;
  }

  a:hover {
    text-shadow: 0 0 .9px currentColor, 0 0 .9px currentColor, 0 0 .9px currentColor;
  }
`;

export default Footer;
