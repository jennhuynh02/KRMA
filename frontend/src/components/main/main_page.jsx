import React from 'react';
import LoginFormContainer from '../session/login_form_container';
import SignupFormContainer from '../session/signup_form_container';
import Footer from './footer';

function MainPage(props) {
  return (
    <div className="main-page-content">
      <div className="login-signup-container">
        <h1 className="session-header">Login to unlock your treasures:</h1>
        <div className="forms">
          <SignupFormContainer />
          <LoginFormContainer />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default MainPage;
