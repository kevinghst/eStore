import React from 'react';

class Cart extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.getUserProducts(this.props.currentUser.id);
  }

  deleteItem(e){
    let itemId = e.currentTarget.className.split("")[1];
    this.props.deleteUserProduct(this.props.currentUser.id, itemId);
  }

  render(){
    const { userProducts, allProducts } = this.props;

    return(
      <ul className="userProducts">
        {
          userProducts.map((id, idx) =>
            <li key={idx}>
              <div>
                {allProducts[id] && allProducts[id].name}
              </div>

              <div>
                {allProducts[id] && allProducts[id].price}
              </div>

              <button
                className= {`delete-item ${id}`}
                onClick={this.deleteItem}
              >Delete Item</button>
            </li>
          )
        }
      </ul>
    );
  }
}

export default Cart;
