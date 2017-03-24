import React from 'react';
import { Link, withRouter } from 'react-router';
import Products from './products';

class HomePage extends React.Component{
  constructor(props){
    super(props);

    this.logout = this.logout.bind(this);
  }

  logout(){
    this.props.logout().then(() => {
      this.props.router.push("/login");
    });
  }

  render(){
    let currentUser = this.props.currentUser || {};

    return(
      <div className="homePage">
        <section className="home-header">
          <div>Welcome Back, {currentUser.username}</div>
          <div className="logout-button">
            <button onClick={this.logout}>Log Out</button>
          </div>
        </section>

        <Products products={this.props.allProducts} />
      </div>
    );
  }
}

export default HomePage;
