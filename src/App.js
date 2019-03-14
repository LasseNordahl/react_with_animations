import React, { Component } from 'react';
import './App.css';

import Clock from './components/Clock';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2 className="title"> Lasse sucks at animations </h2>
        <div className="centerFlex">
          <Clock></Clock>
        </div>
      </div>
    );
  }
}

export default App;
