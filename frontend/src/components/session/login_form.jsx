import React from 'react';
import { withRouter } from 'react-router-dom';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errors: {},
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.currentUser === true) {
      this.props.history.push('/main');
    }

    this.setState({ errors: nextProps.errors });
  }

  update(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { login } = this.props;
    const { email, password } = this.state;
    const user = { email, password };
    login(user);
  }

  demoLogin() {
    const { login } = this.props;
    const user = { email: 'treasure@treasurebox.com', password: '123456' };
    login(user);
  }

  renderErrors() {
    const { errors } = this.state;
    return (
      <ul>
        <br />
        {Object.keys(errors).map((error, i) => (
          <li key={`errors-${i}`} className="errors">
            {errors[error]}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    const { email, password } = this.state;
    let { errors } = this.state;
    errors = Object.values(errors);

    return (
      <div className="session-form-main">
        <div className="session-form-container">
          <div className="session-form-switch">
            <button type="button" className="session-buttons" onClick={() => window.location.href = '/#/signup'}>Sign Up</button>
            <button type="button" className="session-buttons" onClick={this.demoLogin}>Demo User</button>
          </div>
          <div className="session-form">
            <form onSubmit={this.handleSubmit}>
              <h2 className="form-title">Welcome Back</h2>
              <label>
                <input
                  type="text"
                  value={email}
                  onChange={this.update('email')}
                />
                Email
              </label>
              <label>
                <input
                  type="password"
                  value={password}
                  onChange={this.update('password')}
                />
                Password
              </label>
              {(email.length !== 0 && password.length !== 0 ? <button type="submit" className="session-buttons">Log In</button> : null)}
            </form>
            <div>
              {errors.length > 0 ? (errors[0][errors[0].length - 1] !== ' ' ? this.renderErrors() : '') : ''}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(LoginForm);
