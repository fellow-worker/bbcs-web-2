import React, { FC, PropsWithChildren } from 'react';
import Text from 'components/Text';

export interface ParagraphProps {
  color?: 'text' | 'green' | 'blue',
}

const Paragraph: FC<PropsWithChildren<ParagraphProps>> = (props) => {
  const { children, color } = props;
  return <Text color={color} variant="p">{children}</Text>;
};

export default Paragraph;
