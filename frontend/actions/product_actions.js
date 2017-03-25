import * as APIUtil from '../util/product_api_util';

export const RECEIVE_PRODUCTS = "RECEIVE_PRODUCTS";

export const receiveProducts = products => {
  return {
    type: RECEIVE_PRODUCTS,
    products
  };
};

export function getProducts(){
  return (dispatch)=>{
    return APIUtil.getProducts().then(
      (products) => dispatch(receiveProducts(products))
    );
  };
}
