import styled from 'styled-components';
import { ReactComponent as Twitter } from 'icons/twitter.svg';
import { ReactComponent as YouTube } from 'icons/youtube.svg';
import { ReactComponent as Instagram } from 'icons/instagram.svg';
import { ReactComponent as Facebook } from 'icons/facebook.svg';
import React, { FC } from 'react';

const SocialMedia: FC<{ condensed?: boolean }> = ({ condensed }) => (
  <Container condensed={condensed}>
    <a
      title="Twitter"
      style={{ paddingTop: '9px' }}
      target="_blank"
      href="https://twitter.com/Bijbelcursussen"
      rel="noreferrer"
    >
      <Twitter height={20} />
    </a>
    <a
      title="Youtube"
      style={{ paddingTop: '9px' }}
      target="_blank"
      href="https://www.youtube.com/bijbelcursussen"
      rel="noreferrer"
    >
      <YouTube height={20} />
    </a>
    <a
      title="Facebook"
      style={{ paddingTop: '6px' }}
      target="_blank"
      href="https://www.facebook.com/bijbelcursussen"
      rel="noreferrer"
    >
      <Facebook height={26} />
    </a>
    <a
      title="Instagram"
      style={{ paddingTop: '7px' }}
      target="_blank"
      href="https://www.instagram.com/bijbelcursussen"
      rel="noreferrer"
    >
      <Instagram height={26} />
    </a>
  </Container>
);

const Container = styled.div<{ condensed?: boolean }>`
  height: 160px;
  width: 50px;
  background-color: ${p => p.theme.colors.green};
  z-index: 2;
  border-radius: 12px 0 0 12px;
  top: ${p => (p.condensed !== true ? 680 : 460)}px;
  color: ${p => p.theme.colors.background};
  position: absolute;

  display: flex;
  justify-content: center;
  justify-items: center;
  align-items: center;
  flex-flow: column;
  padding: 6px 0;

  svg {
    color: ${p => p.theme.colors.background};
    padding-bottom: 6px;
  }

  a {
    display: flex;
    flex: 0 0 38px;
    height: 38px;
    box-sizing: border-box;
  }

`;

export default SocialMedia;
