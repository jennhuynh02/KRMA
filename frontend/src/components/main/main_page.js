import React from 'react';
import LoginFormContainer from '../session/login_form_container'
import SignupFormContainer from "../session/signup_form_container";

class MainPage extends React.Component {
  render() {
    return (
    <div>
        <div className="login-signup-container">
          <h1 className="session-header">Login to unlock your treasures:</h1>
            <div className="forms">
            <SignupFormContainer />
            {/* <br /> */}
            <LoginFormContainer />
            </div>
        </div>

      <footer className="mainpage-footer">
      <p>Author-Programmers: </p>
        <a className="linked-in-links" href="https://www.linkedin.com/in/james-jiang-b962a245/">James Jiang</a>,
        <a className="linked-in-links" href="https://www.linkedin.com/in/jenniferanhhuynh/">Jennifer Huynh</a>,
        <a className="linked-in-links" href="https://www.linkedin.com/in/joshua-silva-roland-0b9b951a9/">Joshua Silva-Roland</a>,
        <a className="linked-in-links" href="https://www.linkedin.com/in/michael-murry-b3746a1a6/"> Michael Murry</a>
      <p>Copyright &copy; 2020 TreasureBox</p>
      </footer>
    </div>
    );
  }
}

export default MainPage;