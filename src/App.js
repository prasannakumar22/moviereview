import React, { Component } from 'react';
import './App.css';

import Movie from './components/movie';

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <p className="App-intro">
         <Movie/>
        </p>
      </div>
    );
  }
}

export default App;
