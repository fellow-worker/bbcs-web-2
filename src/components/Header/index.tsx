import React, { ReactElement, useState } from 'react';
import styled from 'styled-components';
import { SelectedMenuContext } from './SelectedMenuContext';
import getImage from './images';
import SocialMedia from './SocialMedia';
import BackgroundProps from './BackgroundProps';
import Background from './Background';
import Navbar from './Navbar';
import Logo from './Logo';

const useSelectMenuItem = () => {
  const [selected, setSelected] = useState<string | undefined>();
  return { selectedMenu: selected, setSelectMenu: setSelected };
};

const Header = (props: BackgroundProps): ReactElement => {
  const state = useSelectMenuItem();
  return (
    <SelectedMenuContext.Provider value={state}>
      <BaseHeader {...props} />
    </SelectedMenuContext.Provider>
  );
};

const BaseHeader = (props: BackgroundProps): ReactElement => {
  const { condensed, fill } = props;

  const image = getImage(fill, condensed);
  return (
    <div>
      <NavContainer>
        <Navbar />
        <Logo />
      </NavContainer>
      <Background image={image} {...props} />
      <SocialMedia condensed={condensed} />
    </div>
  );
};

const NavContainer = styled.div`
  display: flex;
  position: relative;
  width: 100%;
`;

export default Header;
