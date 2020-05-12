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
        this.renderErrors = this.renderErrors.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.currentUser === true) {
            this.props.history.push('/main');
        }

        this.setState({ errors: nextProps.errors });
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = { email: this.state.email, password: this.state.password };
        this.props.login(user);
    }

    renderErrors() {
        return (
            <ul>
                {Object.keys(this.state.errors).map((error, i) => (
                    <li key={`errors-${i}`}>
                        {this.state.errors[error]}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        return (
            <div>
                <form className="session-form" onSubmit={this.handleSubmit}>
                    <h2>Login</h2>
                    <label>Email</label>
                    <br />
                    <input
                        type="text" 
                        value={this.state.email}
                        onChange={this.update('email')}
                        placeholder="Email"
                    />
                    <br />
                    <label>Password</label>
                    <br />
                    <input
                        type="password"
                        value={this.state.password}
                        onChange={this.update('password')}
                        placehold="Password"
                    />
                    {this.renderErrors()}
                    <button>Log In</button>
                </form>
            </div>
        );
    }
}

export default withRouter(LoginForm);