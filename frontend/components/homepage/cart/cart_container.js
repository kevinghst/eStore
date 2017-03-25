import {connect} from 'react-redux';
import Cart from './cart';
import {getUserProducts} from '../../../actions/product_actions';

const mapStateToProps = (state) => {
  return {
    userProducts: state.product.userProducts,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getUserProducts: (userId) => dispatch(getUserProducts(userId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
