import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import '../styles/App.css';
import * as THREE from 'three';

class App extends Component {
  constructor(props){
    super(props);
    debugger
  }
  init() {

  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
