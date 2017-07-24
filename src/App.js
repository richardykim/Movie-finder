import React, { Component } from 'react';
import SearchBar from './search_bar'
import './App.css';

const API_KEY = 'ac9fcc068de5367719b98d63133cbf6d'
const MovieDB = require('moviedb')+ API_KEY;

class App extends Component {

  videoSearch(term){
    MovieDB.searchMovie({ query: 'Alien' }, (err, res) => {
      console.log(res);
    });
  }


  render() {
    return (
      <div className="App">
        <div className="container">
            <h1>Welcome to the show finder</h1>
            <SearchBar onSearchTermChange={videoSearch}/>
        </div>
      </div>
    );
  }
}

export default App;
