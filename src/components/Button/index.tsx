import React, { FC, ReactElement } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

interface ButtonProps {
  onClick?: Function,
  href?: string,
  color?: 'green' | 'blue' | 'gray'
  label?: string,
  icon?: ReactElement,
  size?: 'small' | 'normal'
}

const Button: FC<ButtonProps> = (props) => {
  const { href, label, color, onClick, icon, size } = props;
  const navigate = useNavigate();

  const onButtonClick = () => {
    if (onClick) onClick();
    else if (href) navigate(href);
  };

  return (
    <ButtonBase
      onClick={onButtonClick}
      color={color ?? 'blue'}
      height={size === 'small' ? 40 : 40}
      padding={size === 'small' ? 0 : 20}
      type="button"
    >
      {label}{icon}
    </ButtonBase>
  );
};

const ButtonBase = styled.button<{ color: 'green' | 'blue' | 'gray', height: number, padding: number }>`
  background-color: ${p => p.theme.colors[p.color]};
  border: 0;
  border-radius: 12px;
  color: ${p => p.theme.colors.background};
  height: ${p => p.height}px;
  line-height: ${p => p.height}px;
  padding: 0 ${p => p.padding}px;
  font-size: 16px;
  cursor: pointer;

  svg {
    padding-top: 6px;
    height: 28px;
  }
`;

export default Button;
