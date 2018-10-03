import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import theme from './theme';
import Game from './game/game';

const GlobalStyle = createGlobalStyle`
  font: 14px "Century Gothic", Futura, sans-serif;
  margin: 20px;
`;

ReactDOM.render((
  <ThemeProvider theme={theme}>
    <div>
      <GlobalStyle />
      <Game />
    </div>
  </ThemeProvider>
), document.getElementById('root'));
