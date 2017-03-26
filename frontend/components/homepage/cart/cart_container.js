import {connect} from 'react-redux';
import Cart from './cart';
import {deleteUserProduct } from '../../../actions/product_actions';
import {getTotalPrice} from '../../../reducers/selectors';

const mapStateToProps = (state) => {
  return {
    totalPrice: getTotalPrice(state.product),
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    deleteUserProduct: (userId, productId) => dispatch(deleteUserProduct(userId, productId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
