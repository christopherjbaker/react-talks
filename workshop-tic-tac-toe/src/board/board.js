import React from 'react';

import { Container, Row, Square } from './styled';

export default function Board({ squares, onClick }) {
  return (
    <Container>
      <Row>
        <Square onClick={() => onClick(0)}>{squares[0]}</Square>
        <Square onClick={() => onClick(1)}>{squares[1]}</Square>
        <Square onClick={() => onClick(2)}>{squares[2]}</Square>
      </Row>
      <Row>
        <Square onClick={() => onClick(3)}>{squares[3]}</Square>
        <Square onClick={() => onClick(4)}>{squares[4]}</Square>
        <Square onClick={() => onClick(5)}>{squares[5]}</Square>
      </Row>
      <Row>
        <Square onClick={() => onClick(6)}>{squares[6]}</Square>
        <Square onClick={() => onClick(7)}>{squares[7]}</Square>
        <Square onClick={() => onClick(8)}>{squares[8]}</Square>
      </Row>
    </Container>
  );
}
