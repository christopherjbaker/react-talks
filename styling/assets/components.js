import styled from 'styled-components';

export const Button = styled.button`
  border: 1px solid darkblue;
  background: ${props => props.color || 'blue'};

  ${props => props.outline && css`
    border-color: ${props => props.color || 'blue'};
    background-color: darkblue;
  `}
`;

function Thing() {
  return (
    <div>
      <Button>Default Button</Button>
      <Button color="green">Green Button</Button>
      <Button outline>Outlined Button</Button>
    </div>
  );
}
