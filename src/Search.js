// Implementing a search bar help from chatGPT.  No code snippets were copied exactly

import React from 'react';

class Search extends React.Component {
  handleSearch = (event) => {
    let searchText = event.target.value;
    this.props.onSearch(searchText);
  };


render() {
  return (
    <input
      type="text"
      placeholder="Search..."
      onChange={this.handleSearch}
    />
  );
  }
}

export default Search;