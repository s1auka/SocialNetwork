import { connect } from 'react-redux';
import React from 'react';
import { logout } from "../../redux/auth-reducer";
import Header from './Header';


class HeaderContainer extends React.Component {

    render() {

        return (
            <Header {...this.props} />
        )
    }
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})

export default connect(mapStateToProps, { logout })(HeaderContainer);