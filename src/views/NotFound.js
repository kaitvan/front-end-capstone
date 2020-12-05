import React, { Component } from 'react';

class NotFound extends Component {
  render() {
    return (
      <>
      <h1 className='banner'>Oops...</h1>
      <div className='content-text'>
        <p>This page does not exist.</p>
      </div>
      </>
    );
  }
}

export default NotFound;
