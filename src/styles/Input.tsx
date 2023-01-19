import { ChangeEvent } from 'react';
import styled, { css } from 'styled-components';
import { Theme } from '../types';
import '../_variables.scss';
type Props = {
  theme: Theme;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  name: string;
  valid: boolean;
  touched: boolean;
};

const StyledInput = styled.input`
  border-radius: 6px;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  letter-spacing: 1px;
  width: 100%;
  ${({ theme }: Props) => {
    const {
      input: { background, border, boxShadow },
      secondaryColor,
      color,
    } = theme;
    return css`
      background: ${background};
      border: ${border};
      box-shadow: ${boxShadow};
      &:focus {
        border: 2px solid ${secondaryColor};
      }
      color: ${color};
    `;
  }}
`;

const Textarea = styled.textarea`
  border-radius: 6px;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  letter-spacing: 1px;
  width: 100%;
  resize: none;
  ${({ theme }: Props) => {
    const {
      input: { background, border, boxShadow },
      secondaryColor,
      color,
    } = theme;
    return css`
      background: ${background};
      border: ${border};
      box-shadow: ${boxShadow};
      &:focus {
        border: 2px solid ${secondaryColor};
      }
      color: ${color};
    `;
  }}
`;

export { StyledInput, Textarea };
