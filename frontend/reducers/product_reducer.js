let data = require('json!../products.json');
let parsedData = {};

data.products.forEach(function(product){
  parsedData[product["sku"]] = product;
});

const initState = {
  allProducts: parsedData,
  userProducts: [],
};

const ProductReducer = (state=initState, action) => {
  switch(action.type){
    default:
      return state;
  }
}

export default ProductReducer;
