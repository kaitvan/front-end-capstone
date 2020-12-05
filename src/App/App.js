import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from '../helpers/Routes';
import MyNavbar from '../components/MyNavbar';

class App extends React.Component {
  render() {
    return (
      <Router>
        <MyNavbar>
          <Routes/>
        </MyNavbar>
      </Router>
    );
  }
}

export default App;
