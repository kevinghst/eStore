import {RECEIVE_PRODUCTS, RECEIVE_USER_PRODUCTS, REMOVE_USER_PRODUCT, RECEIVE_USER_PRODUCT} from '../actions/product_actions';
import {merge} from 'lodash';

const initState = {
  allProducts: {},
  userProducts: {}
};

const ProductReducer = (state=initState, action) => {
  Object.freeze(state);

  switch(action.type){
    case RECEIVE_PRODUCTS:
      return { allProducts: action.products, userProducts: state.userProducts }
    case RECEIVE_USER_PRODUCTS:
      return { allProducts: state.allProducts, userProducts: action.userProducts }
    case REMOVE_USER_PRODUCT:
      let dup = merge({}, state);
      delete dup.userProducts[action.productId];
      return dup;
    case RECEIVE_USER_PRODUCT:
      let clone = merge({}, state);
      clone.userProducts[action.productId] = true;
      return clone;
    default:
      return state;
  }
}

export default ProductReducer;
