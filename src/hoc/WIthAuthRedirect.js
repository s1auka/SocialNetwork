import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,

})

export const withAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            //how to redirect back to profile
            if (!this.props.isAuth) return <Redirect to='/auth/login' /> //how to redirect back to profile
            return <Component {...this.props} />
        }


    }
    let AuthRedirectComponent = connect(mapStateToProps)(RedirectComponent);

    return AuthRedirectComponent;

}