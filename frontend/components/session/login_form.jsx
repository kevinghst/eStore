import React from 'react';

const LoginForm = ({login, username, updateForm, password, loginErrors}) => {
  return(
    <form className="login group" onSubmit={login}>
      <div className="login-username field">
        <div>Username</div>
        <input type="text"
            className = "loginUsername"
            value={username}
            onChange = {updateForm}>
        </input>
      </div>

      <div className="login-password field">
        <div>Password</div>
        <input type="password"
            className = "loginPassword"
            value={password}
            onChange = {updateForm}>
        </input>
      </div>


      <ul className="loginErrors">
        {
          loginErrors.map((error, i) => {
            return <li className="loginError" key={i}>{error}</li>;
          })
        }
      </ul>

      <input className="login-submit-button" type="submit" value="LOGIN" />
    </form>
  );
};

export default LoginForm;
