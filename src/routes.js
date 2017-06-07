import React from 'react';
import { Router, Switch, Route } from 'react-router';

import Login from './components/Login';
import Dashboard from './components/Dashboard';

const Routes = (props) => (
  <Router {...props}>
    <Switch>
    <Route  exact path="/" component={Login} />
    <Route path="/dashboard" component={Dashboard} />
    </Switch>
  </Router>
)

export default Routes;
