import React, { Component } from 'react';
import Square from './Square';

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: Array.from({ length: 24 })
    };
  }

  render() {
    return (
      <div className="Board">
        <h1>This is the color changing board!</h1>
        <h2>Click a square to change its color.</h2>
        <div>{this.state.values.map(s => <Square />)}</div>
      </div>
    );
  }
}

export default Board;
