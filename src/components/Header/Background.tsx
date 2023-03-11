import styled from 'styled-components';
import BackgroundProps from './BackgroundProps';
import { Image } from './images';

const Background = styled.div<{ image: Image } & BackgroundProps>`
  height: ${p => (p.condensed !== true ? 736 : 516)}px;
  background-image: url('/images/headers/${p => p.image.src}');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center 100px;
  display: flex;
  justify-content: flex-start;

  @media (min-width: ${p => p.theme.screens.small}px) {
    justify-content: flex-end;
    background-position: ${p => p.image.position};
  }
  z-index: 1;
`;

export default Background;