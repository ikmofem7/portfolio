import styled from 'styled-components';
import { contentBackgroundColor } from '../helpers/styles';
import { Theme } from '../types';

type LinkWrapperProps = {
  active: boolean;
  theme: Theme;
};

const Navigation = styled.nav`
  position: fixed;
  right: 0;
  top: 16%;
`;

const LinkWrapper = styled.a`
  background-color: ${({ theme, active }: LinkWrapperProps) => {
    const { background, secondaryColor } = theme;
    return active ? secondaryColor : background?.navMenuBg;
  }};
  margin: 20px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3rem;
  width: 3rem;
  height: 3rem;
  margin-right: 1rem;
  box-shadow: ${({ theme }) => {
    const { boxShadow } = theme;
    return boxShadow;
  }};
  color: ${({ theme, active }: LinkWrapperProps) => {
    const { color } = theme;
    return active ? '#fff' : color;
  }};
  position: relative;
  a {
    color: inherit;
  }
  &:hover {
    background-color: ${({ theme }: LinkWrapperProps) => {
      const { secondaryColor } = theme;
      return secondaryColor;
    }};
    color: #fff;
    box-shadow: none;
  }
  &:hover h2 {
    opacity: 1;
    right: 24px;
    text-align: center;
    border-radius: 30px 0 0 30px;
    background-color: ${({ theme }) => contentBackgroundColor(theme, true)};
  }
`;

export { Navigation, LinkWrapper };
