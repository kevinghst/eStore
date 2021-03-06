import React from 'react';
import { Provider } from 'react-redux';
import { Redirect, Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import SessionFormContainer from './session/session_form_container';
import HomePageContainer from './homepage/homepage_container';
import Catalog from './homepage/catalog';
import CartContainer from './homepage/cart/cart_container';


export default function Root({store}){
  function redirectIfLoggedIn(_, replace){
    if( store.getState().session.currentUser ){
      replace('/home');
    }
  }

  function redirectIfLoggedOut(_, replace){
    const currentUser = store.getState().session.currentUser;
    if (!currentUser) {
      replace('/login');
    }
  }

  return (
    <Provider store={ store }>
      <Router history={ hashHistory }>
        <Redirect from="/" to="/home"/>
        <Route path="/" component={App} >
          <Route path="/home" component={ HomePageContainer } onEnter={redirectIfLoggedOut}>
            <IndexRoute component={Catalog}/>
            <Route path="/home/cart" component={CartContainer}/>
          </Route>
          <Route path="/login" component={ SessionFormContainer } onEnter={redirectIfLoggedIn} />
        </Route>
      </Router>
    </Provider>
  );
}
