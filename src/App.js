import React, { Component } from 'react';
import SearchBar from './search_bar'
import Display from './display'
import './App.css';

const mdb = require('moviedb')(API_KEY);

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      shows:[],

    }
    this.videoSearch = this.videoSearch.bind(this);
    this.videoSearch('Titanic')
  }

  videoSearch(term){
    mdb.searchMovie({ query: term }, (err, res) => {
      this.setState({
        if (res){
          shows:res['results']
          console.log(res['results'][0]);
        }
      });
    });
  };



  render() {
    return (
      <div className="App">
        <div className="container">
            <h1>Welcome to the show finder</h1>
            <SearchBar onSearchTermChange={this.videoSearch}/>
            <Display shows={this.state.shows} />
        </div>
      </div>
    );
  }
}

export default App;
