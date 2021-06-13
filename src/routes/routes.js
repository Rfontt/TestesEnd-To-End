import React from 'react';
import { Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Logged from '../pages/Logged';
import Route from './wrapper';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/main" exact component={Logged} isPrivate />
    </Switch>
  );
}