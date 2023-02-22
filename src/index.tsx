import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Routing } from 'pages/Routing';
import { BrowserRouter } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import { defaultTheme } from 'themes/default';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const Boxed = styled.div`
  flex: 0 0 1500px;

  @media (max-width: ${p => p.theme.screens.large}px) {
    flex: 1 1 auto;
  }
  background-color: ${p => p.theme.colors.background};
  min-height: 100vh;
`;

const Spacer = styled.div`
  flex: 1 1 auto;

  @media (max-width: ${p => p.theme.screens.large}px) {
    flex: 0 0 0;
  }
`;

const Container = styled.div`
  display: flex;
  width: 100%;
`;

root.render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <Container>
        <Spacer />
        <Boxed>
          <BrowserRouter>
            <Routing />
          </BrowserRouter>
        </Boxed>
        <Spacer />
      </Container>
    </ThemeProvider>
  </React.StrictMode>
);
