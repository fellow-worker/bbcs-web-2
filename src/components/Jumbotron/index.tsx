import styled from 'styled-components';
import React, { FC, PropsWithChildren } from 'react';

export interface JumbotronProps {
  fill?: string,
  header: string,
}

const Jumbotron: FC<PropsWithChildren<JumbotronProps>> = (props) => {
  const { fill, header, children } = props;
  return (
    <>
      <Header fill={fill}>
        <Side />
        <Handle>{header}</Handle>
        <Side />
      </Header>
      <Children>{children}</Children>
    </>
  );
};

const Header = styled.div<{ fill?: string }>`
  height: ${p => (p.fill ? 179 : 45)}px;
  background-image: ${p => (p.fill ? `url('/images/jumbotrons/${p.fill}.jpg')` : 'none')};
  background-repeat: no-repeat;
  background-position: top;
  display: flex;
  justify-items: center;
  width: 100%;
  align-items: flex-end;
`;

const Side = styled.div`
  height: 45px;
  box-sizing: border-box;
  border-bottom: 23px solid ${p => p.theme.colors.blue};
  flex: 1 1 auto;
`;

const Handle = styled.div`
  background-color: ${p => p.theme.colors.blue};
  color: ${p => p.theme.colors.background};
  border-radius: 16px 16px 0 0;
  flex: 0 0 412px;
  text-align: center;
  line-height: 45px;
  font-size: 16px;
  font-weight: bold;
  height: 45px;
`;

const Children = styled.div`
  background-color: ${p => p.theme.colors.blue};
  color: ${p => p.theme.colors.background};
  width: 100%;
  padding: 60px 0;
`;

export default Jumbotron;
