import React from 'react';
import { withRouter } from 'react-router-dom';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      firstName: '',
      lastName: '',
      password: '',
      password2: '',
      errors: {},
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    const { history } = this.props;
    if (nextProps.currentUser === true) {
      history.push('/main');
    }

    this.setState({ errors: nextProps.errors });
  }

  update(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const {
      email, firstName, lastName, password, password2,
    } = this.state;
    const { signup, history } = this.props;
    const user = {
      email,
      firstName,
      lastName,
      password,
      password2,
      keyCount: 0,
      collection: [],
    };

    signup(user, history);
  }

  demoLogin() {
    const { login } = this.props;
    const user = { email: 'demo@krma.com', password: '123456' };
    login(user);
  }

  renderErrors() {
    const { errors } = this.state;
    return (
      <ul>
        {Object.keys(errors).map((error, i) => (
          <li key={`errors-${i}`} className="errors">
            {errors[error]}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    const {
      email, firstName, lastName, password, password2,
    } = this.state;
    let { errors } = this.state;

    errors = Object.values(errors);
    return (
      <div className="session-form-main">
        <div className="session-form-container">
          <div className="session-form-switch">
            <button type="button" className="session-buttons" onClick={() => window.location.href = '/#/login'}>Log In</button>
            <button type="button" className="session-buttons" onClick={this.demoLogin}>Demo User</button>
          </div>
          <div className="session-form">
            <form onSubmit={this.handleSubmit}>
              <h2 className="form-title">Welcome</h2>
              <label>
                <input
                  type="text"
                  value={firstName}
                  onChange={this.update('firstName')}
                />
                First Name
              </label>
              <label>
                <input
                  type="text"
                  value={lastName}
                  onChange={this.update('lastName')}
                />
                Last Name
              </label>
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
              <label>
                <input
                  type="password"
                  value={password2}
                  onChange={this.update('password2')}
                />
                Confirm Password
              </label>
              {(email && firstName && lastName && password && password2
                ? <button className="session-buttons">Sign Up</button>
                : null
              )}
            </form>
            <div>{errors.length > 0 ? (errors[0][errors[0].length - 1] === ' ' ? this.renderErrors() : '') : ''}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(SignupForm);
