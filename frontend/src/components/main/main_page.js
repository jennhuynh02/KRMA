import React from 'react';
import LoginFormContainer from '../session/login_form_container'
import SignupFormContainer from "../session/signup_form_container";

class MainPage extends React.Component {
  render() {
    return (
    <div>
        <div className="login-signup-container">
          <h1>Login to unlock your treasures:</h1>
          <LoginFormContainer />
          <SignupFormContainer />
        </div>

      <footer className="mainpage-footer">
      <h5>Author-Programmers: James Jiang, Michael Murry, Joshua Silva-Roland, Jennifer Huynh</h5>
        Copyright &copy; 2020 TreasureBox
      </footer>
    </div>
    );
  }
}

export default MainPage;