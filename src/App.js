import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {}
    this.handleClick = this.handleClick.bind(this)


  }
  handleClick = () => {
    this.setState({ name: "Tiger" });
  };

  render() {
    console.log("Tiger")
    return (
      <div>

        <button value="Tiger" onClick={this.handleClick}> Tiger </button>
        <button value="Lion" onClick={this.handleClick}> Lion </button>
        <button value="Elephant" onClick={this.handleClick}> Elephant </button>
        <button value="Dog" onClick={this.handleClick}> Dog </button>

      </div>
    );
  }
}




export default App;
