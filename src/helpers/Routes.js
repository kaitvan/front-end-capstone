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

export default function Routes({ user }) {
  return (
    <Switch>
      <Route exact path='/' component={() => <Home user={user}/>}/>
      <Route exact path='/explore' component={() => <Explore user={user}/>}/>
      <Route exact path='/my-list' component={() => <MyList user={user}/>}/>
      <Route exact path='/spin' component={() => <Spin user={user}/>}/>
      <Route component={NotFound}/>
    </Switch>
  );
}
