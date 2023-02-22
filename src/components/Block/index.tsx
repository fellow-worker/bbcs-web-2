import styled from 'styled-components';
import React, { FC, PropsWithChildren } from 'react';

const Block: FC<PropsWithChildren> = ({ children }) => (
  <Container>
    <Box>{children}</Box>
  </Container>
);

const Container = styled.div`
  display: flex;
  justify-content: center;
  justify-items: center;
  padding-bottom: 75px;
`;

const Box = styled.div`
  max-width: ${p => p.theme.maxWidth}px;
  padding: 0 50px;
`;

export default Block;
