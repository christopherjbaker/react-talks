import styled from 'styled-components';
import Button from './components';

const List = styled.ul`
  list-style: none;

  li {
    font-weight: bold;
  }

  ${Button} {
    box-shadow: 5px 10px #888888;
  }
`

function Thing() {
  return (
    <List>
      <li>First item</li>
      <li><Button>Second item</Button></li>
      <li>Third item</li>
    </List>
  );
}
