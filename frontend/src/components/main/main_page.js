import React from 'react';
import LoginFormContainer from '../session/login_form_container'
import SignupFormContainer from "../session/signup_form_container";

class MainPage extends React.Component {
  render() {
    return (
    <div class="main-page-content">
        <div className="login-signup-container">
          <h1 className="session-header">Login to unlock your treasures:</h1>
            <div className="forms">
            <SignupFormContainer />

            <LoginFormContainer />
            </div>
        </div>

      <footer className="mainpage-footer">
      <p>Author-Programmers' LinkedIn: </p>
        <a href="https://www.linkedin.com/in/james-jiang-b962a245/"><input className="linked-in-links" type="button" value="James Jiang"/></a>
        <a href="https://www.linkedin.com/in/jenniferanhhuynh/"><input className="linked-in-links" type="button" value="Jennifer Huynh"/></a>
        <a href="https://www.linkedin.com/in/joshua-silva-roland-0b9b951a9/"><input className="linked-in-links" type="button" value="Joshua Silva-Roland"/></a>
        <a href="https://www.linkedin.com/in/michael-murry-b3746a1a6/"><input className="linked-in-links" type="button" value=" Michael Murry"/></a>
      <p>Copyright &copy; 2020 TreasureBox</p>
      </footer>
    </div>
    );
  }
}

export default MainPage;