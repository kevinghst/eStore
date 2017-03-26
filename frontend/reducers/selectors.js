export const getTotalPrice = (product) => {
  let sum = 0;
  Object.keys(product.userProducts).forEach(function(productId){
    sum += product.allProducts[productId].price;
  });
  return sum;
};
