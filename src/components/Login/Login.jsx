import React from 'react';
import { Field, reduxForm } from 'redux-form';

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component="input" name="login" placeholder="Login" />
            </div>
            <div>
                <Field component="input" type="password" name="password" placeholder="password" />
            </div>
            <div>
                <Field component="input" type="checkbox" name="rememberMe" />remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({ form: "login" })(LoginForm);

const Login = () => {
    let onSubmit = (formData) => {

    }
    return (
        <div>
            <h3>LOGIN</h3>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>

    )
}

export default Login;