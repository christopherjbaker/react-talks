import React, { useContext } from 'react';

const THEMES = {
  blue: {
    colors: {
      background: '#0000ff',
      foreground: '#ffff00',
    },
    sizes: {
      button: '1.25em',
    },
  },
  red: {
    colors: {
      background: '#ff0000',
      foreground: '#00ffff',
    },
    sizes: {
      button: '1.25em',
    },
  },
};

const ThemeContext = React.createContext();

export default function ThemeProvider({ theme, children }) {
  return (
    <ThemeContext.Provider value={THEMES[theme]}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useColor(color) {
  const { colors } = useContext(ThemeContext);
  return colors[color];
};

export function useSize(size) {
  const { sizes } = useContext(ThemeContext);
  return sizes[size];
};
