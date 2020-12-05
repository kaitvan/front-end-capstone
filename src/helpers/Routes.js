import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';
import Home from '../views/Home';
import Explore from '../views/Explore';
import MyList from '../views/MyList';
import Spin from '../views/Spin';
import NotFound from '../views/NotFound';

export default function Routes() {
  return (
    <Switch>
      <Route exact path='/' component={() => <Home />}/>
      <Route exact path='/explore' component={() => <Explore />}/>
      <Route exact path='/my-list' component={() => <MyList />}/>
      <Route exact path='/spin' component={() => <Spin />}/>
      <Route component={NotFound}/>
    </Switch>
  );
}
