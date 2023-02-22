import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useSelectedMenu } from 'components/Header/SelectedMenuContext';

interface Props {
  parentId: string
  items: { name: string, id: string, url: string }[]
}

const SubMenu = (props: Props) => {
  const { parentId, items } = props;
  const { selectedMenu } = useSelectedMenu();

  const show = selectedMenu === parentId;
  const height = show ? items.length * 32 + 30 : 0;

  return (
    <Container style={{ maxHeight: `${height}px` }}>
      <Inner>
        {items.map(i => (
          <SubMenuItem key={i.id}>
            <Link to={i.url}>{i.name}</Link>
          </SubMenuItem>
        ))}
      </Inner>
    </Container>
  );
};

const Container = styled.div`
  overflow: hidden;
  transition: max-height 0.2s linear 0s;
  z-index: 2;
  left: -16px;
  position: absolute;
  max-height: 0;
  top: 60px;
`;

const Inner = styled.div`
  background-color: ${p => p.theme.colors.background};
  white-space: nowrap;
  line-height: 28px;
  border-radius: 0 0 16px 16px;
  text-align: left;
  cursor: pointer;

  a {
    padding: 8px 16px;
  }

  &:last-child {
    padding-bottom: 8px;
  }
`;

const SubMenuItem = styled.div`

  a {
    color: ${p => p.theme.colors.text};
    text-decoration: none;
    font-weight: 300;

    &:hover {
      color: ${p => p.theme.colors.green};
    }
  }
`;

export default SubMenu;
