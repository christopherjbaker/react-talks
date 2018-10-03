import React, { Component } from 'react';
import Board from '../board/board';
import { calculateWinner } from '../utils';

import { Container, Info, Status } from './styled';

export default class Game extends Component {
  state = {
    squares: Array(9).fill(null),
    xIsNext: true,
  }

  handleClick(i) {
    const current = this.state.squares;
    if (calculateWinner(current) || current[i]) {
      return;
    }

    const squares = current.slice();
    squares[i] = this.state.xIsNext ? "X" : "O";

    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext,
    });
  }

  render() {
    const squares = this.state.squares;
    const winner = calculateWinner(squares);

    let status;
    if (winner) {
      status = "Winner: " + winner;
    } else {
      status = "Next player: " + (this.state.xIsNext ? "X" : "O");
    }

    return (
      <Container>
        <Board
          squares={squares}
          onClick={(index) => this.handleClick(index)}
        />
        <Info>
          <Status>{status}</Status>
        </Info>
      </Container>
    );
  }
}
