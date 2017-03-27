import React from 'react';

class ProductDetails extends React.Component{
  constructor(props){
    super(props);

    let addedToCart = this.props.userProducts[this.props.product.id] ? true : false;
    this.state = {addedToCart: addedToCart};
    this.addToCart = this.addToCart.bind(this);
  }

  addToCart(e){
    let userId = parseInt(e.currentTarget.className.split(" ")[1]);
    let productId = parseInt(e.currentTarget.className.split(" ")[2]);
    this.props.addUserProduct(userId, productId);
    this.setState({ addedToCart: true });
  }

  render(){
    const { product, userProducts, closeModal, currentUser } = this.props;

    let addButton;
    if(this.state.addedToCart){
      addButton = (
        <button
          className = "add-button added"
        >Added to Cart</button>
      )
    } else {
      addButton = (
        <button
          className= {`add-button ${currentUser.id} ${product.id}`}
          onClick={this.addToCart}
        >Add to Cart</button>
      )
    }

    return(
      <div className="modal-content">
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
          onClick={closeModal}
        >Close</button>

        {addButton}
      </div>
    );
  }
}

export default ProductDetails;
