import React, { Component } from 'react';
import './Square.css';

let colors = [
  'LAVENDAR',
  'THISTLE',
  'PLUM',
  'VIOLET',
  'ORCHID',
  'FUCHSIA',
  'MAGENTA',
  'MEDIUMORCHID',
  'MEDIUMPURPLE',
  'REBECCAPURPLE',
  'BLUEVIOLET',
  'DARKVIOLET',
  'DARKORCHID',
  'DARKMAGENTA',
  'PURPLE',
  'INDIGO',
  'SLATEBLUE',
  'DARKSLATEBLUE',
  'MEDIUMSLATEBLUE',
  'TEAL',
  'DARKCYAN',
  'CADETBLUE',
  'STEELBLUE',
  'ROYALBLUE'
];

class Square extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: this.getRandomColor()
    };
  }

  getRandomColor() {
    let color = colors[Math.floor(Math.random() * 24) + 1];
    return color;
  }

  render() {
    return (
      <div
        className="Square"
        onClick={e => this.setState({ color: this.getRandomColor() })}
        style={{ backgroundColor: this.state.color }}
      />
    );
  }
}

export default Square;
