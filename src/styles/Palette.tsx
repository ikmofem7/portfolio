import styled, { css } from 'styled-components';

const Palette = styled.div`
  ${css`
    @media screen and (min-width: 786px) {
      display: flex;
    }
    display: block;
  `}
  z-index: 1;
  position: fixed;
  top: 64px;
  right: 1rem;
  background-color: ${({ theme }) => {
    const { background } = theme;
    return background?.navMenuBg;
  }};
  padding: 0.5rem;
  border-radius: 0.5rem;
`;

const ColorBox = styled.div<{ color: string }>`
  width: 2rem;
  height: 2rem;
  background-color: ${({ color }) => color};
  margin: 0.5rem;
  border-radius: 0.25rem;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

export { Palette, ColorBox };
