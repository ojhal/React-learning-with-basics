import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: "Tiger"
    }
    this.handleClick = this.handleClick.bind(this)


  }
  handleClick() {
    this.setState({ Animal: this.state.animal })
  }

  render() {
    console.log("tiger")
    return (
      <div>
        <button onClick={this.handleClick}> click me  </button>
        <h1>{this.state.name}</h1>

      </div>
    );
  }
}




export default App;
