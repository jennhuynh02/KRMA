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
            <div>
                <form className="session-form" onSubmit={this.handleSubmit}>
                    <h2>Signup</h2>
                    <label>First Name</label>
                    <br />
                    <input
                        type="text"
                        value={this.state.firstName}
                        onChange={this.update('firstName')}
                        placeholder="First Name"
                    />
                    <br />
                    <label>Last Name</label>
                    <br />
                    <input
                        type="text"
                        value={this.state.lastName}
                        onChange={this.update('lastName')}
                        placeholder="Last Name"
                    />
                    <br />
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
                        placeholder="Password"
                    />
                    <br />
                    <label>Confirm Password</label>
                    <br />
                    <input
                        type="password"
                        value={this.state.password2}
                        onChange={this.update('password2')}
                        placeholder="Confirm Password"
                    />
                    {this.renderErrors()}
                    <button>Sign Up</button>
                </form>
            </div>
        );
    }
}

export default withRouter(SignupForm);