import styled from 'styled-components';
import React, { FC, PropsWithChildren } from 'react';

const Statement: FC<PropsWithChildren> = ({ children }) => (
  <Container>
    <Text>{children}</Text>
  </Container>
);

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Text = styled.div`
  color: ${p => p.theme.colors.background};
  font-weight: 100;
  font-size: 30px;
  margin: 24px 0;
  line-height: 36px;
  text-align: center;
  max-width: 475px;
  padding: 0 20px;
`;

export default Statement;
