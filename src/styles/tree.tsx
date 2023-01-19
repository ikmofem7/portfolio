import styled from 'styled-components';
import { contentBackgroundColor } from '../helpers/styles';
import { Card } from './content';

const TreeWrapper = styled.div`
  border-left: ${({ theme }) => {
    const { border } = theme;
    return `5px solid ${border}`;
  }};
  position: relative;
  padding: 1rem;
  margin: 1rem;
  padding-left: 2rem;
  margin-left: 0;
`;

const TreeChild = styled(Card)`
  padding: 2rem;
  margin: 2rem 0;
  overflow: unset;
  position: relative;
  height: 320px;
  max-height: 320px;
  &:hover {
    &::before {
      background-color: ${({ theme }) => contentBackgroundColor(theme, true)};
    }
  }
  &::before {
    content: '';
    background-color: ${({ theme }) => contentBackgroundColor(theme)};
    width: 10px;
    height: 10px;
    position: absolute;
    left: -44px;
    border-radius: 50px;
    border: ${({ theme }) => {
      const { border } = theme;
      return `5px solid ${border}`;
    }};
    transition: all 0.3s;
  }
  &::after {
    content: '';
    background-color: ${({ theme }) => {
      const { border } = theme;
      return border;
    }};
    width: 1.5rem;
    height: 6px;
    position: absolute;
    left: -24px;
    top: 40px;
  }
  @media screen and (max-width: 768px) {
    &::before {
      left: -36px;
      top: 33px;
    }
    &::after {
      left: -16px;
    }
  }
`;

export { TreeWrapper, TreeChild };
