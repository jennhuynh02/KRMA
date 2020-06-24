import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../main/footer';

class Splash extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  handleClick(e) {
    e.stopPropagation();
    const { open } = this.state;
    this.setState({
      open: !open,
    });
  }

  handleClickOutside() {
    this.setState({
      open: false,
    });
  }

  handleLogin(type) {
    let email;
    (type === 'admin' ? email = 'admin@treasurebox.com' : email = 'treasure@treasurebox.com')
    const { login } = this.props;
    const user = { email, password: '123456' };
    login(user);
  }

  render() {
    const { open } = this.state;
    return (
      <div className="splash-page-full" onClick={this.handleClickOutside}>
        <div className="splash-page-header">
          <div className="button-container" ref={this.container}>
            <button type="button" onClick={this.handleClick}>Begin</button>
            {(open
              ? (
                <div className="login-dropdown">
                  <ul>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/signup">Sign Up</Link></li>
                    <li onClick={() => this.handleLogin('demo')}>Demo User</li>
                    <li onClick={() => this.handleLogin('admin')}>Admin User</li>
                  </ul>
                </div>
              )
              : null)}
          </div>
        </div>
        <section className="splash-text-container">
          <div className="splash-text-main">
            <h1>KRMA</h1>
            <h2> &#34;Kindness, like a boomerang, always returns&#34; </h2>
          </div>
          {/* <div className="what-is-krma">
            <a href="#instructions" className="button scrolly">What is KRMA</a>
          </div> */}
        </section>
        <section id="instructions">
          <div>
            <span className="splash-instructions-logo" />
            <span />
          </div>
          <ul>
            <li />
          </ul>
        </section>
        {/* <Footer /> */}
      </div>
    );
  }
}

export default Splash;