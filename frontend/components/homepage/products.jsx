import React from 'react';

const Products = ({products, activateModal}) => {
  let productKeys = Object.keys(products);

  return(
    <ul className="products">
      {
        productKeys.map((sku, idx) =>
           <li className="product" key={idx}>
             <div className={`descriptions ${sku}`} onClick={activateModal}>
               <div className="description">
                 <tag>Name:</tag>
                 <div>{products[sku].name}</div>
               </div>
               <div className="description">
                 <tag>Brand:</tag>
                 <div>{products[sku].brand}</div>
               </div>
               <div className="description">
                 <tag>Model:</tag>
                 <div>{products[sku].model}</div>
               </div>
               <div className="description">
                 <tag>Price:</tag>
                 <div>{products[sku].price}</div>
               </div>
             </div>
          </li>
        )
      }
    </ul>
  );
};

export default Products;
