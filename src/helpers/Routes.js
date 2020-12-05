import React from 'react';
import {
  Route,
  Switch,
  Redirect,
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
      <PrivateRoute exact path='/explore' component={Explore} user={user}/>
      <PrivateRoute exact path='/my-list' component={MyList} user={user}/>
      <PrivateRoute exact path='/spin' component={Spin} user={user}/>
      <Route component={NotFound}/>
    </Switch>
  );
}

const PrivateRoute = ({ component: Component, user, ...rest }) => {
  const routeChecker = (taco) => (user
    ? (<Component {...taco} user={user}/>)
    : (<Redirect to={{ pathname: '/', state: { from: taco.location } }}/>));
  return <Route {...rest} render={(props) => routeChecker(props)} />;
};
