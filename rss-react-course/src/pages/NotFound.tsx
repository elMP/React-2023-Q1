import React from 'react';

import Header from '../components/Header';

class NotFound extends React.Component {
  render() {
    return (
      <div className="container">
        <Header title="404" />
        <h2>404 - not found</h2>
      </div>
    )
  }
}

export default NotFound;
