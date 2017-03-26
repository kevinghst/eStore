import React from 'react';
import { Link, withRouter } from 'react-router';
import Products from './products';
import Modal from './modal';
import ProductDetails from './product_details';

class Catalog extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      showModal: null
    };
    this.activateModal = this.activateModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentDidMount(){
    let body = document.getElementById('container');
    body.className = "";
  }

  activateModal(e){
    let id = e.currentTarget.className.split(" ")[1];
    this.setState({ showModal: id });
    let body = document.getElementById('container');
    body.className = "modal-body";
  }

  closeModal(){
    this.setState({ showModal: null });
    let body = document.getElementById('container');
    body.className = "";
  }

  render(){
    return(
      <div className="catalog">
        {this.state.showModal
          &&
          <Modal>
            <ProductDetails
              product = {this.props.allProducts[this.state.showModal]}
              closeModal = {this.closeModal}
              addUserProduct = {this.props.addUserProduct}
              currentUser = {this.props.currentUser}
              userProducts = {this.props.userProducts}
            />
          </Modal>
        }

        <Products
          products={this.props.allProducts}
          activateModal={this.activateModal}
        />
      </div>
    );
  }
}

export default Catalog;
