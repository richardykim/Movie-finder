import React, { Component } from 'react';
import SearchBar from './search_bar'
import logo from './logo.svg';
import './App.css';

const API_KEY = 'ac9fcc068de5367719b98d63133cbf6d'


class App extends Component {

  videoSearch(term){
    
  }

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
