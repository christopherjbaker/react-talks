import React, { useContext } from 'react';
import ThemeProvider, { useColor, useSize } from './provider';

function Layout() {
  return (
    <ThemeProvider theme="red">
      <div className="left">
        <Button>Left Button</Button>
      </div>

      <ThemeProvider theme="blue">
        <div className="content">
          <Button>Content Button</Button>
        </div>
      </ThemeProvider>
    </ThemeProvider>
  );
}

function Button({ children, ...props }) {
  const background = useColor('background');
  const color = useColor('foreground');
  const fontSize = useSize('button');

  return (
    <div {...props} style={{ background, color, fontSize }}>
      {children}
    </div>
  );
}
