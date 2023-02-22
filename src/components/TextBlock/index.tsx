import styled from 'styled-components';
import React, { FC, PropsWithChildren } from 'react';

interface Props {
  columns?: number;
}

const TextBlock: FC<PropsWithChildren<Props>> = ({ children, columns }) => (
  <Container>
    <Text columns={columns}>{children}</Text>
  </Container>
);

const Container = styled.div`
  display: flex;
  justify-content: center;
  justify-items: center;
  padding-bottom: 75px;
`;

const Text = styled.div<Props>`
  column-gap: 100px;
  column-count: ${p => p.columns ?? 2};
  max-width: ${p => p.theme.maxWidth}px;
  padding: 0 50px;

  p:first-child {
    padding-top: 0;
    margin-top: 0;
  }
`;

export default TextBlock;
