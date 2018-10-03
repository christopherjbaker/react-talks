import React from 'react';
import Square from './square';

import { Container, Row } from './styled';

export default function Board({ squares, onClick }){
  return (
    <Container>
      <Row>
        <Square value={squares[0]} onClick={() => onClick(0)} />
        <Square value={squares[1]} onClick={() => onClick(1)} />
        <Square value={squares[2]} onClick={() => onClick(2)} />
      </Row>
      <Row>
        <Square value={squares[3]} onClick={() => onClick(3)} />
        <Square value={squares[4]} onClick={() => onClick(4)} />
        <Square value={squares[5]} onClick={() => onClick(5)} />
      </Row>
      <Row>
        <Square value={squares[6]} onClick={() => onClick(6)} />
        <Square value={squares[7]} onClick={() => onClick(7)} />
        <Square value={squares[8]} onClick={() => onClick(8)} />
      </Row>
    </Container>
  );
}
