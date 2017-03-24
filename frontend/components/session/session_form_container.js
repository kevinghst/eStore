import {connect} from 'react-redux';
import SessionForm from './session_form';
import {signup, login} from '../../actions/session_actions';

const mapStateToProps = (state) => {
  const log = !!state.session.currentUser;

  let signupErrors = [];
  if (state.session.signupErrors && state.session.signupErrors.length > 0){
    if(state.session.signupErrors.includes("Username has already been taken")){
      signupErrors = ["Username already taken!"];
    } else {
      signupErrors = ["Password too short! (min 6)"];
    }
  }

  let loginErrors = [];
  if (state.session.loginErrors){
    state.session.loginErrors.forEach((el) => {
      loginErrors.push(el + "!");
    });
  }

  return {
    loggedIn: log,
    signupErrors: signupErrors,
    loginErrors: loginErrors,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    signup: user => dispatch(signup(user)),
    login: user => dispatch(login(user))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
