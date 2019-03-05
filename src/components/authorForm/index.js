import React, { Component } from 'react';
import './index.css';

class AuthorForm extends Component {
  render() {
    // this is javascript
    // console.log(this.props);

    return (
      // this is javascript
      <form onSubmit={this.props.changeName}>
      {/*  this is JSX  */}
        <label>Change Author:</label>
        <input type="text" name="name" />
        <input type="submit" value="Change" />
      </form>
    );
  }
}

export default AuthorForm;
