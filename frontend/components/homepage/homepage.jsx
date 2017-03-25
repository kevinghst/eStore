import React from 'react';
import Catalog from './catalog';

class HomePage extends React.Component{
  constructor(props){
    super(props);

    this.logout = this.logout.bind(this);
  }

  componentDidMount(){
    this.props.getProducts();
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

          {React.cloneElement(this.props.children, {
            currentUser: currentUser,
            allProducts: this.props.allProducts
          })}

        </div>
      </div>
    );
  }
}

export default HomePage;
