import * as APIUtil from '../util/product_api_util';

export const RECEIVE_PRODUCTS = "RECEIVE_PRODUCTS";
export const RECEIVE_USER_PRODUCTS = "RECEIVE_USER_PRODUCTS";
export const REMOVE_USER_PRODUCT = "REMOVE_USER_PRODUCT"

export const receiveUserProducts = userProducts => {
  return {
    type: RECEIVE_USER_PRODUCTS,
    userProducts
  };
};

export const receiveProducts = products => {
  return {
    type: RECEIVE_PRODUCTS,
    products
  };
};

export const removeUserProduct = productId => {
  return {
    type: REMOVE_USER_PRODUCT,
    productId
  }
}

export function getUserProducts(userId){
  return (dispatch) => {
    return APIUtil.getUserProducts(userId).then(
      (userProducts) => dispatch(receiveUserProducts(userProducts))
    );
  };
}

export function getProducts(){
  return (dispatch)=>{
    return APIUtil.getProducts().then(
      (products) => dispatch(receiveProducts(products))
    );
  };
}

export function deleteUserProduct(userId, productId){
  return (dispatch) => {
    APIUtil.deleteProduct(userId, productId);
    return dispatch(removeUserProduct(productId));
  }
}
