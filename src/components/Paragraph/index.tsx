import React, { FC, PropsWithChildren } from 'react';
import Text from 'components/Text';

export interface ParagraphProps {
  color?: 'text' | 'green' | 'blue' | 'background',
  center?: boolean
  justify?: boolean
}

const Paragraph: FC<PropsWithChildren<ParagraphProps>> = (props) => {
  const { children, color, center, justify } = props;
  return <Text center={center} justify={justify} color={color} variant="p">{children}</Text>;
};

export default Paragraph;
