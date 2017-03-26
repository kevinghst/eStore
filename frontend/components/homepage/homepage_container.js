import {connect} from 'react-redux';
import HomePage from './homepage';
import {logout} from '../../actions/session_actions';
import {getProducts, addUserProduct, getUserProducts} from '../../actions/product_actions';

const mapStateToProps = (state) => {
  const log = !!state.session.currentUser;
  return {
    loggedIn: log,
    currentUser: state.session.currentUser,
    allProducts: state.product.allProducts,
    userProducts: state.product.userProducts,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
      logout: () => dispatch(logout()),
      getProducts: () => dispatch(getProducts()),
      getUserProducts: (userId) => dispatch(getUserProducts(userId)),
      addUserProduct: (userId, productId) => dispatch(addUserProduct(userId, productId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
