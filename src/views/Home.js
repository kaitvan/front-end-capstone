import React, { Component } from 'react';
import Auth from '../components/Auth';

class Home extends Component {
  quotes = [
    "Self-care is giving the world the best of you, instead of what's left of you.",
    'Give yourself the same care and attention that you give to others.',
    'The most important relationship is the one you have with yourself.',
  ];

  render() {
    const { user } = this.props;
    const showRandomQuote = () => {
      const randomQuote = this.quotes[Math.floor(Math.random() * this.quotes.length)];
      return randomQuote;
    };

    return (
      <>
        <h1 className='banner'>Home</h1>
        { user
          ? (<div className='content-text'>
              <p className='home-quote'>{showRandomQuote()}</p>
            </div>)
          : (
          <>
          <div className='content-text'>
            <p className='home-quote'>Self-care looks different for each unique person. Curate your personalized list and start taking better care of yourself.</p>
            <Auth />
          </div>
          </>)}
      </>
    );
  }
}

export default Home;
