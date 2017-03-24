import React from 'react';
import { Link, withRouter } from 'react-router';
import LoginForm from './login_form';
import SignupForm from './signup_form';

class SessionForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      loginUsername: "",
      loginPassword: "",
      signupUsername: "",
      signupPassword: ""
    };

    this.updateForm = this.updateForm.bind(this);
    this.login = this.login.bind(this);
    this.signup = this.signup.bind(this);
  }

  updateForm(e){
    let stateType = e.currentTarget.className;
    let stateValue = e.currentTarget.value;
    this.setState({ [stateType]: stateValue });
  }

  signup(e){
    e.preventDefault();
    let signupState = {
      username: this.state.signupUsername,
      password: this.state.signupPassword
    };

    this.setState({
      signupUsername: "",
      signupPassword: ""
    });

    this.props.signup(signupState).then((currentUser) => {
      this.props.router.push("/home");
    });
  }

  login(e){
    e.preventDefault();
    let loginState = {
      username: this.state.loginUsername,
      password: this.state.loginPassword
    };

    this.setState({
      loginUsername: "",
      loginPassword: ""
    });

    this.props.login(loginState).then((currentUser) => {
      this.props.router.push("/home");
    });
  }

  render(){
    return(
      <div className="login-main">

        <LoginForm
          login = {this.login}
          username = {this.state.loginUsername}
          updateForm = {this.updateForm}
          password = {this.state.loginPassword}
          loginErrors = {this.props.loginErrors}
        />

        <SignupForm
          signup = {this.signup}
          username = {this.state.signupUsername}
          password = {this.state.signupPassword}
          updateForm = {this.updateForm}
          signupErrors = {this.props.signupErrors}
        />
      </div>
    );
  }
}

export default SessionForm;
