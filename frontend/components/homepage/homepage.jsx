import React from 'react';
import Catalog from './catalog';
import { Link, withRouter } from 'react-router';

class HomePage extends React.Component{
  constructor(props){
    super(props);

    this.logout = this.logout.bind(this);
  }

  componentDidMount(){
    this.props.getProducts();
    this.props.getUserProducts(this.props.currentUser.id);
  }

  logout(){
    this.props.logout().then(() => {
      this.props.router.push("/login");
    });
  }

  render(){
    let cartCount = Object.keys(this.props.userProducts).length;
    let currentUser = this.props.currentUser || {};
    let link = (
      <Link className="link" to={"/home/cart"}>Cart ({cartCount})</Link>
    );
    if(this.props.location.pathname === '/home/cart'){
      link = (
        <Link className="link" to={"/home"}>Catalog</Link>
      )
    }

    return(
      <div className="homePage">
        <div id="container">
          <section className="home-header">
            <div className="nav-header">
              <div className="greeting">
                <tag>Welcome Back, </tag>
                <div className="greeting-username">{currentUser.username}</div>
              </div>
              { link }
              <div className="logout-button">
                <button onClick={this.logout}>Log Out</button>
              </div>
            </div>
          </section>

          {React.cloneElement(this.props.children, {
            currentUser: currentUser,
            allProducts: this.props.allProducts,
            addUserProduct: this.props.addUserProduct,
            userProducts: this.props.userProducts
          })}

        </div>
      </div>
    );
  }
}

export default HomePage;
