import React from 'react';

import './SearchBar.css';

class SearchBar extends React.Component {
  state = {
    inputValue: localStorage.getItem('data') || '',
  };

  componentDidMount(): void {
    this.setState({
      inputValue: localStorage.getItem('elmp-search-value'),
    });
  }

  componentWillUnmount(): void {
    this.state.inputValue && localStorage.setItem('elmp-search-value', this.state.inputValue);
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ inputValue: event.target.value });
  };

  render() {
    return (
      <div className="search-bar">
        <input
          type="text"
          value={this.state.inputValue}
          placeholder="type something"
          onChange={this.handleChange}
        />
        <button className="search-bar__button">Search</button>
      </div>
    );
  }
}

export default SearchBar;
