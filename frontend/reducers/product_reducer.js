import {RECEIVE_PRODUCTS} from '../actions/product_actions';

const initState = {
  allProducts: {}
};

const ProductReducer = (state=initState, action) => {
  switch(action.type){
    case RECEIVE_PRODUCTS:
      return { allProducts: action.products }
    default:
      return state;
  }
}

export default ProductReducer;
