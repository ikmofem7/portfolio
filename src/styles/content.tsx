import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import { contentBackgroundColor, heading, textColor } from '../helpers/styles';
import { HeadingProps, Theme } from '../types';

type LineProps = {
  width?: string;
  borderWidth?: string;
  secondary?: boolean;
  theme: Theme;
};

type ProgressBarProps = {
  percentage: number;
  theme: Theme;
};

const Wrapper = styled.section`
  background-color: ${({ theme }) => contentBackgroundColor(theme)};
  min-height: 100vh;
`;

const Heading = styled.h1<HeadingProps>`
  ${heading('3rem', '4rem', 'uppercase', 700)}
`;

const SlantingDiv = styled.div`
  margin: 0 0 0 -20px;
  -webkit-transform: skew(20deg);
  -moz-transform: skew(20deg);
  -o-transform: skew(20deg);
  background-color: ${({ theme }) => contentBackgroundColor(theme, true)};
  overflow: hidden;
  position: absolute;
  top: 0;
  left: -13vw;
  height: 100vh;
  width: 40vw;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Card = styled.div`
  border-radius: 10px;
  background: ${({ theme }) => {
    const { background } = theme;
    return background.content;
  }};
  box-shadow: ${({ theme }) => {
    const { boxShadow } = theme;
    return boxShadow;
  }};
  overflow: hidden;
  &:hover {
    background: ${({ theme }) => {
      const { cardHover } = theme;
      return cardHover;
    }};
  }
`;

const Heading2 = styled.h2<HeadingProps>`
  ${heading('2.5rem', '3rem', 'uppercase', 600)}
`;

const Heading3 = styled.h3<HeadingProps>`
  ${heading('1.5rem', '2rem', 'uppercase', 600)}
`;

const Line = styled.hr<LineProps>`
  width: ${({ width }: LineProps) => (width ? width : '1rem')};
  border-color: ${({ theme, secondary }: LineProps) => {
    const { secondaryColor, border } = theme;
    return secondary ? secondaryColor : border;
  }};
`;

const SeperatorLine = styled(Line)`
  margin: 5rem auto;
`;

const ProgressBarContainer = styled(Card)<{ theme: Theme }>`
  width: 100%;
  height: 0.7rem;
  border: ${({ theme }) => {
    const { background } = theme;
    return `1px solid ${background.content}`;
  }};
`;

const ProgressBar = styled.div<ProgressBarProps>`
  height: 100%;
  background-color: ${({ theme }) => contentBackgroundColor(theme, true)};
  width: ${({ percentage }) => percentage}%;
`;

const SecondaryText = styled.p`
  color: ${({ theme }) => textColor(theme, true)};
`;

const SecondaryIcon = styled(FontAwesomeIcon)`
  color: ${({ theme }) => textColor(theme, true)};
`;
const Icon = styled(Card)`
  width: 3rem;
  height: 3rem;
  padding: 0.5rem;
  svg {
    width: 2rem;
    height: 2rem;
  }
  path {
    fill: ${({ theme }) => textColor(theme, true)};
  }
`;
const Button = styled.button`
  width: 100%;
  border-radius: 6px;
  background-color: ${({ theme }) => {
    const { background } = theme;
    return background?.navMenuBg;
  }};
  padding: 1rem;
  color: ${({ theme }) => textColor(theme)};
  cursor: pointer;
  box-shadow: ${({ theme }) => {
    const { boxShadow } = theme;
    return boxShadow;
  }};
  border: 0;
  outline: 0;
  text-transform: uppercase;
`;

export {
  Wrapper,
  Heading,
  SlantingDiv,
  Card,
  Heading3,
  Heading2,
  Line,
  SeperatorLine,
  ProgressBarContainer,
  ProgressBar,
  SecondaryText,
  SecondaryIcon,
  Button,
  Icon,
};
