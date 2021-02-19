import { connect } from 'react-redux';
import React from 'react';
import { getAuth, logout } from "../../redux/auth-reducer";
import Header from './Header';


class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.getAuth();
    }

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

export default connect(mapStateToProps, { getAuth, logout })(HeaderContainer);