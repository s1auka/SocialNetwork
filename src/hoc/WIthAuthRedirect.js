import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,

})

export const withAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.isAuth) return <Redirect to='/auth/login' />
            return <Component {...this.props} />
        }


    }
    let AuthRedirectComponent = connect(mapStateToProps)(RedirectComponent);

    return AuthRedirectComponent;

}