import { connect } from 'react-redux';
import React from 'react';
import { setAuthInfo } from "../../redux/auth-reducer";
import Header from './Header';
import axios from 'axios';


class HeaderContainer extends React.Component {

    componentDidMount() {
        axios.get("https://social-network.samuraijs.com//api/1.0/auth/me", { withCredentials: true })
            .then(response => {
                if (response.data.resultCode === 0) {
                    let { email, id, login } = response.data.data;
                    this.props.setAuthInfo(email, id, login);
                }
            })
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

export default connect(mapStateToProps, { setAuthInfo })(HeaderContainer);