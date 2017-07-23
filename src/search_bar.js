import React, {Component} from 'react';


class SearchBar extends Component{
  constructor(props){
    super(props);
    this.state = {term:''}
  }

  render(){
    return(
      <div>
        <input placeholder="Search show"/>
      </div>
    )
  }
}

export default SearchBar;
