import React from 'react';

import { Square as Container } from './styled';

export default function Square({ value, onClick }) {
  return (
    <Container onClick={onClick}>
      {value}
    </Container>
  );
}
