import React from 'react';
import { Provider } from 'react-redux';
import { Redirect, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import { HashRouter as Router } from 'react-router-dom';




export default function Root({store}){


  return (
    <Provider store={ store }>
      <Router>
        <Route path="/" component={App} />
      </Router>
    </Provider>
  );
}
