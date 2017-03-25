import {RECEIVE_PRODUCTS, RECEIVE_USER_PRODUCTS, REMOVE_USER_PRODUCT} from '../actions/product_actions';
import {merge} from 'lodash';

const initState = {
  allProducts: {},
  userProducts :[]
};

const ProductReducer = (state=initState, action) => {
  switch(action.type){
    case RECEIVE_PRODUCTS:
      return { allProducts: action.products, userProducts: state.userProducts }
    case RECEIVE_USER_PRODUCTS:
    debugger
      let userProducts = action.userProducts.map(function(obj){
        return obj["id"];
      });
      return { allProducts: state.allProducts, userProducts: userProducts }
    case REMOVE_USER_PRODUCT:
      let clone = merge({}, state);

    default:
      return state;
  }
}

export default ProductReducer;
