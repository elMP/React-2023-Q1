import React from 'react';

import Header from '../components/Header';
import SearchBar from '../components/SearchBar';

class MainPage extends React.Component {
  render() {
    return (
      <div className="container">
        <Header title="Main Page" />
        <main className='page-main'>
          <SearchBar />
        </main>

      </div>
    )
  }
}

export default MainPage;
