import React, { Component } from 'react';
import './index.css';

class AnimalButton extends Component {
  render() {
    return (
      <button onClick={this.props.updateAnimals}>Show Animals</button>
    );
  }
}

export default AnimalButton;
