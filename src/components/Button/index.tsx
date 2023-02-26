import React, { FC } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

interface ButtonProps {
  onClick?: Function,
  href?: string,
  color?: 'green' | 'blue'
  label: string
}

const Button: FC<ButtonProps> = (props) => {
  const { href, label, color, onClick } = props;
  const navigate = useNavigate();

  const onButtonClick = () => {
    if (onClick) onClick();
    else if (href) navigate(href);
  };
  return <ButtonBase onClick={onButtonClick} color={color ?? 'blue'}>{label}</ButtonBase>;
};

const ButtonBase = styled.button<{ color: 'green' | 'blue' }>`
  background-color: ${p => p.theme.colors[p.color]};
  border: 0;
  border-radius: 15px;
  color: ${p => p.theme.colors.background};
  height: 50px;
  line-height: 50px;
  padding: 0 25px;
  font-size: 16px;
  cursor: pointer;
`;

export default Button;
