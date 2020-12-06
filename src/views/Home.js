import React, { Component } from 'react';
import Auth from '../components/Auth';

class Home extends Component {
  quotes = [
    'When we choose to honor ourselves in tough moments, we allow ourselves to be free.',
    'Recognize and return to the voice of compassion you always carry within you.',
    'Self-compassion is the practice of treating yourself like a firend through highs and lows.',
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
