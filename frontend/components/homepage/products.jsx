import React from 'react';

const Products = ({products, activateModal, filteredIds}) => {

  return(
    <ul className="products">
      {
        filteredIds.map((id, idx) =>
           <li className="product" key={idx}>
             <div className={`descriptions ${id}`} onClick={activateModal}>
               <div className="description">
                 <tag>Name:</tag>
                 <div>{products[id].name}</div>
               </div>
               <div className="description">
                 <tag>Brand:</tag>
                 <div>{products[id].brand}</div>
               </div>
               <div className="description">
                 <tag>Model:</tag>
                 <div>{products[id].model}</div>
               </div>
               <div className="description">
                 <tag>Price:</tag>
                 <div>{products[id].price}</div>
               </div>
             </div>
          </li>
        )
      }
    </ul>
  );
};

export default Products;
