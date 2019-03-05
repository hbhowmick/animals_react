import React, { Component } from 'react';
import './index.css';
import AnimalItem from '../animalItem';

class AnimalTable extends Component {
  render() {
    // this is javascript
    // console.log(this.props);
    console.log(this.props.animals);


    return (
      // this is javascript
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Species</th>
          </tr>
        </thead>
        <tbody>
          {this.props.animals.map(
              animal => <AnimalItem animal={animal} key={animal.name} />
            )
          }
        </tbody>
      </table>
    );
  }
}

export default AnimalTable;
