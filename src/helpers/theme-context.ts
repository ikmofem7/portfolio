import { createContext } from 'react';
import { Theme } from '../types';

const BaseTheme = {
  color: '#666',
  background: { navMenuBg: '#fff', content: '#ECF0F3' },
  secondaryColor: '#f52225',
  boxShadow: '5px 5px 15px #D1D9E6, -5px -5px 15px #ffffff',
  border: '#d9dee2',
  cardHover: 'linear-gradient(145deg, #e2e8ec, #ffffff)',
  input: {
    background: '#fdfefe',
    boxShadow:
      '1px 4px 2px -3px #d1d9e6 inset, -1px -3px 3px -2px #ffffff inset',
    border: '2px solid #dce1e4',
  },
  type: 'light',
};

const DarkTheme = {
  color: '#fff',
  background: { navMenuBg: '#111', content: '#212428' },
  secondaryColor: '#f52225',
  boxShadow: '10px 10px 19px #1c1e22,  -10px -10px 19px #262a2e',
  border: '#17191c',
  cardHover: 'linear-gradient(to right bottom, #212428, #16181c)',
  input: {
    background: '#191b1e',
    boxShadow:
      '1px 4px 2px -3px rgba(0, 0, 0, 0.7) inset, -1px -3px 3px -2px rgba(255, 255, 255, 0.2) inset',
    border: '2px solid #191b1e',
  },
  type: 'dark',
};

const ThemeContext = createContext<{
  theme: Theme;
  setTheme: (theme: Theme) => void;
}>({
  theme: DarkTheme,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setTheme: () => {},
});

export { ThemeContext, BaseTheme, DarkTheme };
