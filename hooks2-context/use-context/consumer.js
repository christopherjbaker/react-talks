import React, { useContext } from 'react';
import ThemeProvider, { useColor, useSize } from './provider';

function Layout() {
  return (
    <ThemeProvider theme="red">
      <div className="left">
        <Button label="Left Button" />
      </div>

      <ThemeProvider theme="blue">
        <div className="content">
          <Button label="Content Button" />
        </div>
      </ThemeProvider>
    </ThemeProvider>
  );
}

function Button({ label }) {
  const background = useColor('background');
  const color = useColor('foreground');
  const fontSize = useSize('button');

  return (
    <button style={{ background, color, fontSize }}>
      {label}
    </button>
  );
}
