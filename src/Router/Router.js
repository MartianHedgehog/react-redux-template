import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/">{() => <h1>HOME</h1>}</Route>
      </Switch>
    </BrowserRouter>
  );
}
