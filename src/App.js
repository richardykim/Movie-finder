import React, { Component } from 'react';
import SearchBar from './search_bar'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
            <h1>Welcome to the show finder</h1>
            <SearchBar />
        </div>
      </div>
    );
  }
}

export default App;
