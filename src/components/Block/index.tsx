import styled from 'styled-components';
import React, { FC, PropsWithChildren } from 'react';

interface BlockProps {
  paddingTop?: boolean
  paddingBottom?: boolean
  padding?: boolean
}

const Block: FC<PropsWithChildren<BlockProps>> = (props) => {
  const { children, padding, paddingBottom, paddingTop } = props;
  const padTop = !(padding === false || paddingTop === false);
  const padBottom = !(padding === false || paddingBottom === false);
  return (
    <Container className="block" padTop={padTop} padBottom={padBottom}>
      <Box>{children}</Box>
    </Container>
  );
};

const Container = styled.div<{ padBottom: boolean, padTop: boolean }>`
  display: flex;
  justify-content: center;
  justify-items: center;
  padding-bottom: ${p => (p.padBottom ? 75 : 0)}px;
  padding-top: ${p => (p.padTop ? 75 : 0)}px;
  width: 100%;
  background: none;
`;

const Box = styled.div`
  max-width: ${p => p.theme.maxWidth}px;
  padding: 0 50px;
  flex: 1 1 100%
`;

export default Block;
