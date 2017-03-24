import React from 'react';

const ProductDetails = ({product, closeModal}) => {

  return(
    <div>
      <div className="product-details">
        <div className="detail">
          <tag>Name:</tag>
          <div>{product.name}</div>
        </div>
        <div className="detail">
          <tag>Brand:</tag>
          <div>{product.brand}</div>
        </div>
        <div className="detail">
          <tag>Model:</tag>
          <div>{product.model}</div>
        </div>
        <div className="detail">
          <tag>Price:</tag>
          <div>{product.price}</div>
        </div>
        <div className="detail-description">
          <tag>Description:</tag>
          <div>{product.desc}</div>
        </div>
      </div>

      <button
        className= "exit-button"
        onClick={closeModal}>
        Close
      </button>
    </div>
  );
};

export default ProductDetails;
