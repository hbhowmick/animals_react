import React, { Component } from 'react';
import './index.css';

class AnimalItem extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.animal.name}</td>
        <td>{this.props.animal.species}</td>
      </tr>
    );
  }
}

export default AnimalItem;
