import React from 'react';
import LoginFormContainer from '../session/login_form_container';
import SignupFormContainer from '../session/signup_form_container';

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

      <footer className="mainpage-footer">


        <div className="authors">

          <span className="programmer">
            <a href="https://www.linkedin.com/in/jamesjiang13/">
              <i className="fa fa-linkedin-square" style={{ color: '#0077b5', fontSize: '45px' }} />
            </a>
            <a href="https://github.com/jamesjiang13">
              <i className="fa fa-github" style={{ color: 'black', fontSize: '45px' }} />
            </a>
            James Jiang
          </span>

          <span className="programmer">
            <a href="https://www.linkedin.com/in/jenniferanhhuynh/">
              <i className="fa fa-linkedin-square" style={{ color: '#0077b5', fontSize: '45px' }} />
            </a>
            <a href="https://github.com/jennhuynh02">
              <i className="fa fa-github" style={{ color: 'black', fontSize: '45px' }} />
            </a>
            Jennifer Huynh
          </span>

          <span className="programmer">
            <a href="https://www.linkedin.com/in/michael-murry-b3746a1a6/">
              <i className="fa fa-linkedin-square" style={{ color: '#0077b5', fontSize: '45px' }} />
            </a>
            <a href="https://github.com/MichaelMurry49">
              <i className="fa fa-github" style={{ color: 'black', fontSize: '45px' }} />
            </a>
            Michael Murry
          </span>

          <span className="programmer">
            <a href="https://www.linkedin.com/in/joshua-silva-roland/">
              <i className="fa fa-linkedin-square" style={{ color: '#0077b5', fontSize: '45px' }} />
            </a>
            <a href="https://github.com/jsilvaroland">
              <i className="fa fa-github" style={{ color: 'black', fontSize: '45px' }} />
            </a>
            Joshua Silva-Roland
          </span>


        </div>
        <p>Copyright &copy; 2020 TreasureBox</p>
      </footer>
    </div>
  );
}

export default MainPage;
