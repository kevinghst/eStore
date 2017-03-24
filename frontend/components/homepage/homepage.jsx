import React from 'react';
import { Link, withRouter } from 'react-router';
import Products from './products';
import Modal from './modal';
import ProductDetails from './product_details';

class HomePage extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      showModal: null
    };
    this.logout = this.logout.bind(this);
    this.activateModal = this.activateModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentDidMount(){
    let body = document.getElementById('container');
    body.className = "";
  }

  logout(){
    this.props.logout().then(() => {
      this.props.router.push("/login");
    });
  }

  activateModal(e){
    let sku = e.currentTarget.className.split(" ")[1];
    this.setState({ showModal: sku });
    let body = document.getElementById('container');
    body.className = "modal-body";
  }

  closeModal(){
    this.setState({ showModal: null });
    let body = document.getElementById('container');
    body.className = "";
  }

  render(){
    let currentUser = this.props.currentUser || {};

    return(
      <div className="homePage">
        <div id="container">
          <section className="home-header">
            <div className="nav-header">
              <div className="greeting">
                <tag>Welcome Back, </tag>
                <div className="greeting-username">{currentUser.username}</div>
              </div>
              <div className="logout-button">
                <button onClick={this.logout}>Log Out</button>
              </div>
            </div>
          </section>

          {this.state.showModal
            &&
            <Modal>
              <ProductDetails
                product = {this.props.allProducts[this.state.showModal]}
                closeModal = {this.closeModal}
              />
            </Modal>
          }

          <Products
            products={this.props.allProducts}
            activateModal={this.activateModal}
          />
        </div>
      </div>
    );
  }
}

export default HomePage;
