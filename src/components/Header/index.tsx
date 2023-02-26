import React, { ReactElement, useState } from 'react';
import styled from 'styled-components';
import { SelectedMenuContext } from './SelectedMenuContext';
import Logo from './Logo';
import NavItem from './Menu';
import getImage, { Image } from './images';
import menuItems from './menuItems';
import SocialMedia from './SocialMedia';

interface Props {
  condensed?: boolean,
  fill?: string,
}

const useSelectMenuItem = () => {
  const [selected, setSelected] = useState<string | undefined>();
  return { selectedMenu: selected, setSelectMenu: setSelected };
};

const Header = (props: Props): ReactElement => {
  const state = useSelectMenuItem();
  return (
    <SelectedMenuContext.Provider value={state}>
      <BaseHeader {...props} />
    </SelectedMenuContext.Provider>
  );
};

const BaseHeader = (props: Props): ReactElement => {
  const { condensed, fill } = props;

  const image = getImage(fill, condensed);
  return (

    <Container image={image} {...props}>
      <NavBar>
        <Logo />
        <Spacer />
        {menuItems.map(m => <NavItem key={m.id} {...m} />)}
      </NavBar>
      <SocialMedia condensed={condensed} />
    </Container>
  );
};

const Container = styled.div<{ image: Image } & Props>`
  height: ${p => (p.condensed !== true ? 736 : 516)}px;
  background-image: url('/images/headers/${p => p.image.src}');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: ${p => p.image.position};
  display: flex;
  justify-content: flex-end;
`;

const NavBar = styled.nav`
  height: 148px;
  width: 100%;
  display: flex;
`;

const Spacer = styled.div`
  flex: auto;
  background-color: ${p => p.theme.colors.background};
  height: 60px;
`;

export default Header;
