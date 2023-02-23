import styled, { css } from 'styled-components';
import React, { FC, PropsWithChildren } from 'react';

export interface TextProps {
  color?: 'text' | 'green' | 'blue',
  variant?: 'h1' | 'h2' | 'h3' | 'p'
  bold?: boolean
  center?: boolean
}

const Text: FC<PropsWithChildren<TextProps>> = (props) => {
  const { variant, children } = props;
  switch (variant) {
    case 'h1':
      return <H1 {...props}>{children}</H1>;
    case 'h2':
      return <H2 {...props}>{children}</H2>;
    case 'h3':
      return <H3 {...props}>{children}</H3>;
    default:
      return <P {...props}>{children}</P>;
  }
};

const Headers = css<TextProps>`
  font-weight: 100;
  text-align: center;
  color: ${p => p.theme.colors[p.color ?? 'text']}
`;

const H1 = styled.h1<TextProps>`
  ${Headers};
  font-size: 50px;
  margin: 65px 0;
`;

const H2 = styled.h2<TextProps>`
  ${Headers};
  font-size: 50px;
`;

const H3 = styled.h3<TextProps>`
  ${Headers};
  font-size: 50px;
`;

const P = styled.p<TextProps>`
  font-weight: ${p => (p.bold ? 'bold' : 300)};
  color: ${p => p.theme.colors[p.color ?? 'text']};
  line-height: 24px;
  letter-spacing: 0.1px;
  text-align: ${p => (p.center ? 'center' : 'left')};

`;

export default Text;
