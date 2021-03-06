import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';
import Root from './components/root';
import {getProducts, getUserProducts, deleteUserProduct, addUserProduct} from './actions/product_actions';

document.addEventListener('DOMContentLoaded', () => {
  let store;

  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }

  window.store = store;
  window.getProducts = getProducts;
  window.getUserProducts = getUserProducts;
  window.deleteUserProduct = deleteUserProduct;
  window.addUserProduct = addUserProduct;

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});
