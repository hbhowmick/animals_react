import React, { Component } from 'react';
import './index.css';

class Header extends Component {
  render() {
    // this is Javascript
    // console.log(this.props);

    return (
      <header className="Header">
        <nav>
          <h1>Animal Project</h1>
          <p>By: {this.props.name}</p>
        </nav>
      </header>
    );
  }
}

export default Header;
