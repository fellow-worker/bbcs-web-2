import React, { FC, PropsWithChildren } from 'react';
import styled from 'styled-components';
import Text from 'components/Text';
import Paragraph from 'components/Paragraph';

interface Props {
  header: string,
  icon: string
}

const Step: FC<PropsWithChildren<Props>> = (props) => {
  const { header, icon, children } = props;
  return (
    <Container>
      <IconContainer>
        <Icon>
          <img alt="step" width="75px" src={`/images/shapes/${icon}.png`} />
        </Icon>
      </IconContainer>
      <Text variant="p" color="blue" bold>
        {header}
      </Text>
      <Paragraph>{children}</Paragraph>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  justify-items: center;
  padding-top: 60px;

  p {
    font-size: 16px !important;
    line-height: 24px;
  }

  @media (min-width: ${p => p.theme.screens.small}px) {
    padding-top: 20px;
  }
`;

const Icon = styled.div`
  height: 145px;
  width: 145px;
  background-color: ${p => p.theme.colors.gray};
  border-radius: 50%;
  display: flex;
  justify-items: center;
  justify-content: center;
  align-items: center;
  align-content: center;
`;

const IconContainer = styled.div`
  display: flex;
  width: 100%;
  justify-items: center;
  justify-content: center;
  align-items: center;
  align-content: center;
  padding-bottom: 20px;
  height: 145px;

  @media (min-width: ${p => p.theme.screens.small}px) {
    padding-bottom: 60px;
    padding-top: 0;
  }

`;

export default Step;
