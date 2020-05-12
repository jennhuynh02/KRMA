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
        let user = {
            email: this.state.email,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            password: this.state.password,
            password2: this.state.password2,
            keyCount: 0,
            collection: [],
        };
        
        this.props.signup(user, this.props.history);
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
            <div className="signup-session-form">
                <form onSubmit={this.handleSubmit}>
                    <h2 className="form-title">Signup</h2>
                    <br />
                    <input
                        className="form-inputs"
                        type="text"
                        value={this.state.firstName}
                        onChange={this.update('firstName')}
                        />
                    <br />
                        <label>First Name</label>
                    <br />
                    <input
                        className="form-inputs"
                        type="text"
                        value={this.state.lastName}
                        onChange={this.update('lastName')}
                        />
                    <br />
                        <label>Last Name</label>
                    <br />
                    <input
                        className="form-inputs"
                        type="text"
                        value={this.state.email}
                        onChange={this.update('email')}
                        />
                    <br />
                        <label>Email</label>
                    <br />
                    <input
                        className="form-inputs"
                        type="password"
                        value={this.state.password}
                        onChange={this.update('password')}
                        />
                    <br />
                        <label>Password</label>
                    <br />
                    <input
                        className="form-inputs"
                        type="password"
                        value={this.state.password2}
                        onChange={this.update('password2')}
                        />
                    <br />
                        <label>Confirm Password</label>
                    {this.renderErrors()}
                    <button className="session-buttons">Sign Up</button>
                </form>
            </div>
        );
    }
}

export default withRouter(SignupForm);