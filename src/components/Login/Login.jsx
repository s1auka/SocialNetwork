import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { editableField } from '../common/formFields/formFields';
import { required } from '../../utils/validators/validators';
import { login } from '../../redux/auth-reducer';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import style from './../common/formFields/formFields.module.css';

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={editableField} el="input" name="login" placeholder="Login" validate={[required]} />
            </div>
            <div>
                <Field component={editableField} el="input" type="password" name="password" placeholder="password" validate={[required]} />
            </div>
            <div>
                <Field component="input" type="checkbox" name="rememberMe" />remember me
            </div>
            {props.error && <div className={style.formSummaryError}>{props.error}</div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({ form: "login" })(LoginForm);

const Login = (props) => {
    let onSubmit = (formData) => {
        let { password, rememberMe, login: email } = formData;
        props.login(email, password, rememberMe);
    }

    if (props.isAuth) {
        return <Redirect to="/profile" />
    }

    return (
        <div>
            <h3>LOGIN</h3>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>

    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
})

export default connect(mapStateToProps, { login })(Login);