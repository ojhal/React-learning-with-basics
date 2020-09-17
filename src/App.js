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

        <button onClick={this.handleClick}> Tiger </button>



      </div>
    );
  }
}




export default App;
