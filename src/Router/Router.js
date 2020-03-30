import React from 'react';
import { Switch, Route } from 'react-router-dom';

export default function Router() {
  return (
    <Switch>
      <Route path="/">{() => <h1>HOME</h1>}</Route>
    </Switch>
  );
}
