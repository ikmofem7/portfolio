import { css } from 'styled-components';
import { HeadingProps, Theme } from '../types';

export const colors = {
  primary: '#645cff',
  white: '#fff',
};

const fonts = {
  primary: `'Poppins', sans-serif'`,
  secondary: `'Open Sans', sans-serif`,
};

const heading = (
  fontSize: string,
  lineHeight: string,
  textTransform: string,
  fontWeight: number
) => {
  return css`
    font-size: ${fontSize};
    line-height: ${lineHeight};
    font-weight: ${fontWeight};
    text-transform: ${textTransform};
    color: ${({ theme, secondary }: HeadingProps) =>
      textColor(theme, secondary)};
  `;
};

const contentBackgroundColor = (theme: Theme, secondary?: boolean) => {
  const { background, secondaryColor } = theme;
  return secondary ? secondaryColor : background?.content;
};

const textColor = (theme: Theme, secondary?: boolean) => {
  const { secondaryColor, color } = theme;
  return secondary ? secondaryColor : color;
};

export { heading, fonts, contentBackgroundColor, textColor };
