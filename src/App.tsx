import { useMemo, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import Container from './containers/Container';
import { DarkTheme, ThemeContext } from './helpers/theme-context';

const App = () => {
  const [theme, setTheme] = useState(DarkTheme);
  const value = useMemo(() => ({ theme, setTheme }), [theme]);

  return (
    <ThemeProvider theme={theme}>
      <ThemeContext.Provider value={value}>
        <Container />
      </ThemeContext.Provider>
    </ThemeProvider>
  );
};
export default App;
