import React from 'react';
import Catalog from './catalog';
import { Link, withRouter } from 'react-router';

class HomePage extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      search: ""
    };
    this.updateSearch = this.updateSearch.bind(this);
    this.logout = this.logout.bind(this);
  }

  updateSearch(e){
    this.setState({
      search: e.target.value.substr(0, 20)
    });
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

    let productIds = Object.keys(this.props.allProducts);
    let that = this;
    let filteredIds = productIds.filter(
      (id) => {
        return that.props.allProducts[id].name.toLowerCase().indexOf(
          that.state.search.toLowerCase()) !== -1;
      }
    );

    return(
      <div className="homePage">
        <div id="container">
          <section className="home-header">
            <div className="nav-header">
              <div className="greeting">
                <tag>Welcome Back, </tag>
                <div className="greeting-username">{currentUser.username}</div>
              </div>
              <input type="text"
                className = "searchBar"
                value={this.state.search}
                onChange={this.updateSearch}
                placeholder = "Search Products"
              ></input>
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
            userProducts: this.props.userProducts,
            filteredIds: filteredIds
          })}

        </div>
      </div>
    );
  }
}

export default HomePage;
