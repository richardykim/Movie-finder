import React, { Component } from 'react';
import SearchBar from './search_bar'
import Display from './display'
import './App.css';

const key = process.env.REACT_APP_MOVIE_API_KEY
const mdb = require('moviedb')(key);


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      shows:[''],
      selectedMovie: null,

    }
    this.videoSearch = this.videoSearch.bind(this);
    this.videoSearch('')
  }

  videoSearch(term){
    mdb.searchMovie({ query: term }, (err, res) => {
      this.setState({
        shows:res
      });
    });
  };



  render() {
    return (
      <div className="App">
        <div className="container">
            <h1>Welcome to the Movie Finder</h1>
            <SearchBar onSearchTermChange={this.videoSearch}/>
            <Display
            onMovieSelect = {selectedMovie => this.setState({selectedMovie})}
            shows={this.state.shows} />
        </div>
      </div>
    );
  }
}

export default App;
