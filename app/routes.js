import React from 'react';
import {Route} from'react-router';
import App from './components/App';
import Home from './compontents/Home';

export default (
  <Route component={App}>
    <Route path='/' component={Home} />
  </Route>
);