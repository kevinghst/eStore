import React from 'react';

const Products = ({products}) => {
  let productKeys = Object.keys(products);

  return(
    <ul className="products">
      {
        productKeys.map((sku, idx) =>
           <li className="product" key={idx}>
            <div>{products[sku].name}</div>
            <div>{products[sku].brand}</div>
            <div>{products[sku].model}</div>
            <div>{products[sku].price}</div>
          </li>
        )
      }
    </ul>
  );
};

export default Products;
