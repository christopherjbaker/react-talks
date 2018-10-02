import styled, { ThemeProvider } from 'styled-components';

const Button = styled.button`
  border: 1px solid ${props => props.theme.foreground};
  background: ${props => props.theme.background};

  ${props => props.outline && css`
    border-color: ${props => props.theme.background};
    background-color: ${props => props.theme.foreground};
  `}
`;

function Thing() {
  return (
    <ThemeProvider theme={{
      background: 'blue',
      foreground: 'darkblue',
    }}>
      <Button>Default Button</Button>
      <Button outline>Outline Button</Button>
    </ThemeProvider>
  );
}
