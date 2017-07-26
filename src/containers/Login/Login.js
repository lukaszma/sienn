import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import FormInput from '../../components/FormInput/FormInput';
import * as sessionActions from '../../actions/sessionActions';
import './Login.css';

class Login extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            credentials: {
                Username: '',
                Password: ''
            },
            authentication: {
                errorMessage: '',
                showError: ''
            }

        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onFocus = this.onFocus.bind(this);
    }

    onChange(event) {
        const field = event.target.name;
        const credentials = this.state.credentials;
        credentials[field] = event.target.value;
        return this.setState({ credentials: credentials });
    }

    onSubmit(event) {
        event.preventDefault();
        this.props.logInUser(this.state.credentials);
        this.props.session.authentication ? this.setState({ authentication: { errorMessage: '', showError: false } }) :
            this.setState({ authentication: { errorMessage: 'Invalid login or password.', showError: true } })
    }

    onFocus() {
        this.setState({ authentication: { errorMessage: '', showError: '' } })
    }



    render() {

        return (
            <div>
                <form className="form-login" onSubmit={this.onSubmit}>
                    <FormInput
                        wrapperClass="form-text-field"
                        name="Username"
                        label="username"
                        value={this.state.credentials.username}
                        onChange={this.onChange}
                        onFocus={this.onFocus} />
                    <FormInput
                        wrapperClass="form-text-field"
                        name="Password"
                        label="password"
                        type="password"
                        value={this.state.credentials.password}
                        onChange={this.onChange}
                        onFocus={this.onFocus} />
                    <FormInput
                        wrapperClass="form-submit-button"
                        name="submit"
                        type="submit"
                        onClick={this.onSubmit} />
                    <div className={this.state.authentication.showError ? 'alert danger-alert' : 'alert'}>{this.state.authentication.errorMessage}</div>

                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return state;
};

const mapDispatchToProps = (dispatch) => bindActionCreators(sessionActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Login);