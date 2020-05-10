import React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import defaultTheme from '../../themes/default.theme';
import Theme from '../../themes/theme.type';

const MonoStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=IBM+Plex+Mono&display=swap');
  * {
    font-family: 'IBM Plex Mono', monospace;
  }

  body {
    font-size: 16px;
  }
`

interface MonoThemeProviderType {
  theme?: Theme
}

const MonoThemeProvider: React.FC<MonoThemeProviderType> = ({children, theme}) => {
  return (
    <ThemeProvider theme={theme ? { ...defaultTheme, ...theme } : defaultTheme}>
      <MonoStyle/>
      {children}
    </ThemeProvider>
  )
}

export default MonoThemeProvider;