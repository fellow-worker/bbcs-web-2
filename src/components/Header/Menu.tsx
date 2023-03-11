import React, { MouseEvent, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import SubMenu from './SubMenu';
import { useSelectedMenu } from './SelectedMenuContext';
import { usePath } from './usePath';

interface Props {
  name: string
  items?: { name: string, id: string, url: string }[]
  url?: string,
  id: string
}

const Menu = (props: Props) => {
  const { name, url, items, id } = props;
  const { selectedMenu, setSelectMenu } = useSelectedMenu();
  const path = usePath();

  const hideMenu = () => {
    setSelectMenu(undefined);
  };

  const isSelected = selectedMenu === id;
  const isPath = path === url || !!items?.find(i => i.url === path);
  const highlighted = isSelected || (!selectedMenu && isPath && !!path);

  const onParentClick = (event: MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    if (!isSelected) setSelectMenu(id);
    else hideMenu();
  };

  useEffect(() => {
    window.addEventListener('click', hideMenu);
    return () => {
      window.removeEventListener('click', hideMenu);
    };
  });

  const className = highlighted ? 'highlighted' : undefined;

  return (
    <Container>
      <Absolute>
        <ParentItem onClick={onParentClick}>
          {url && <Link className={className} to={url}>{name}</Link>}
          {!url && <div className={className}>{name}</div>}
        </ParentItem>
        {items && <SubMenu parentId={id} items={items} />}
      </Absolute>
    </Container>
  );
};

const Container = styled.div`
  background-color: ${p => p.theme.colors.background};
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: auto;
  display: none;
  min-width: 90px;
  line-height: 60px;
  font-size: 16px;
  height: 60px;
  user-select: none;

  @media (min-width: ${p => p.theme.screens.small}px) {
    display: flex;
  }

  @media (min-width: 900px) {
    padding: 0 10px;
  }
`;

const Absolute = styled.div`
  position: relative;
  left: 0;
`;

const ParentItem = styled.div`
  cursor: pointer;
  display: block;
  transition: text-shadow .3s;
  position: absolute;
  white-space: nowrap;

  a, div {
    text-decoration: none;
    width: 100%;
    text-align: left;
    color: ${p => p.theme.colors.text};
    font-weight: 300;

    &:hover {
      color: ${p => p.theme.colors.green};
    }
  }

  a.highlighted, div.highlighted {
    color: ${p => p.theme.colors.blue};
    text-shadow: 0 0 .9px currentColor, 0 0 .9px currentColor, 0 0 .9px currentColor;
  }
`;

export default Menu;
