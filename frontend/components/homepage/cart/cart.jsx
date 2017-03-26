import React from 'react';

class Cart extends React.Component{
  constructor(props){
    super(props);
    this.deleteItem = this.deleteItem.bind(this);
  }

  deleteItem(e){
    let itemId = parseInt(e.currentTarget.className.split(",")[1]);
    this.props.deleteUserProduct(this.props.currentUser.id, itemId);
  }

  render(){
    let { allProducts } = this.props;
    let userProducts = Object.keys(this.props.userProducts);

    return(
      <ul className="userProducts">
        <li className="userProduct">
          <div className="name-sign">Product</div>
          <div className="price-sign">Price</div>
        </li>
        {
          userProducts.map((id, idx) =>
            <li className="userProduct" key={idx}>
              <div className="product-name">
                {allProducts[id] && allProducts[id].name}
              </div>

              <div className='product-price'>
                {allProducts[id] && allProducts[id].price}
              </div>

              <button
                className= {`delete-item,${id}`}
                onClick={this.deleteItem}
              >Delete Item</button>
            </li>
          )
        }
        <li className="total-price">
          <tag>Total Price:</tag>
          <div>{this.props.totalPrice}</div>
        </li>
      </ul>
    );
  }
}

export default Cart;
