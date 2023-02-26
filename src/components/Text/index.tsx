import styled, { css } from 'styled-components';
import React, { FC, PropsWithChildren } from 'react';

export interface TextProps {
  color?: 'text' | 'green' | 'blue' | 'background' | 'gray',
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p'
  bold?: boolean
  center?: boolean
  margin?: number
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
    case 'h5':
      return <H5 {...props}>{children}</H5>;
    default:
      return <P {...props}>{children}</P>;
  }
};

const Headers = css<TextProps>`
  font-weight: 100;
  text-align: center;
`;

const H1 = styled.h1<TextProps>`
  ${Headers};
  color: ${p => p.theme.colors[p.color ?? 'text']};
  font-size: 50px;
  margin: 65px 0;
`;

const H2 = styled.h2<TextProps>`
  ${Headers};
  color: ${p => p.theme.colors[p.color ?? 'text']};
  font-size: 50px;
`;

const H3 = styled.h3<TextProps>`
  ${Headers};
  color: ${p => p.theme.colors[p.color ?? 'text']};
  font-size: 24px;
`;

const H5 = styled.h5<TextProps>`
  color: ${p => p.theme.colors[p.color ?? 'text']};
  text-align: ${p => (p.center ? 'center' : 'left')};
  ${p => (p.margin !== undefined ? `margin: ${p.margin}px` : '')};

  font-size: 16px;
  font-weight: bold;
  line-height: 24px;
  letter-spacing: 0.1px;
`;

const P = styled.p<TextProps>`
  color: ${p => p.theme.colors[p.color ?? 'text']};
  text-align: ${p => (p.center ? 'center' : 'left')};
  ${p => (p.margin !== undefined ? `margin: ${p.margin}px` : '')};

  font-weight: ${p => (p.bold ? 'bold' : 300)};
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.1px;

  a {
    color: ${p => p.theme.colors[p.color ?? 'text']};
    font-weight: bold;
  }
`;

export default Text;
