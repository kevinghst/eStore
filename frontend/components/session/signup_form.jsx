import React from 'react';

const SignupForm = ({signupErrors, signup, username, updateForm, password}) => {
  return(
    <form className="signup group" onSubmit={signup}>
      <div className="signup-header">Sign Up</div>
      <div className="signup-username field">
        <input type="text"
            placeholder="Username"
            className = "signupUsername"
            value={username}
            onChange = {updateForm}>
        </input>
      </div>

      <div className="signup-password field">
        <input type="password"
            placeholder="Password"
            className = "signupPassword"
            value={password}
            onChange = {updateForm}>
        </input>
      </div>

      <ul className="signupErrors">
        {
          signupErrors.map((error, i) => {
            return <li className="signup-error" key={i}>{error}</li>;
          })
        }
      </ul>

      <input className="signup-submit-button" type="submit" value="Sign Up" />
    </form>
  );
};

export default SignupForm;
