import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import AuthorForm from './components/authorForm';
import AnimalTable from './components/animalTable';
import AnimalButton from './components/animalButton';

class App extends Component {
  constructor() {
    super();
    // this.name = 'John Smith'
    this.state= {
      'name': '',
      'animals': []
    }

    this.changeName = this.changeName.bind(this);
  }

  componentWillMount() {
    this.setState({
      'name': 'John Smith',
      // 'animals': [
      //   {
      //     'name': 'Simba',
      //     'species': 'Feline'
      //   },
      //   {
      //     'name': 'Maximus',
      //     'species': 'Canine'
      //   }
      // ]
    });
  }

  updateAnimals = async(e) => {
    e.preventDefault();

    let url = 'https://learnwebcode.github.io/json-example/animals-1.json';

    let response = await fetch(url);

    let data = await response.json();

    this.setState({ 'animals': data });
  }

  changeName(e) {
    e.preventDefault();

    // console.log(e.target.elements.name.value);

    let name = e.target.elements.name.value;



    this.setState({
      'name': name
    });
  }

  render() {
    return (
      <div className="App">
        <Header name={this.state.name} />
        <AuthorForm changeName={this.changeName} />
        {this.state.name === 'Animals' && 
          <AnimalButton updateAnimals={this.updateAnimals} />
        }
        <AnimalTable animals={this.state.animals} />
      </div>
    );
  }
}

export default App;
