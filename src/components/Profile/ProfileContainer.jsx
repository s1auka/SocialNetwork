import React from 'react';
import Profile from './Profile';
import { connect } from "react-redux";
import { getProfile } from "../../redux/profile-reducer";
import { Redirect, withRouter } from 'react-router-dom';

class ProfileContainer extends React.Component {
    componentDidMount() {
        this.props.getProfile(this.props.match.params.userId);
    }

    render() {
        if (!this.props.isAuth) return <Redirect to='/auth/login' />
        return <Profile userProfile={this.props.userProfile} />
    }
}

let mapStateToProps = (state) => ({
    userProfile: state.profileInfo.userProfile,
    isAuth: state.isAuth,

})

let ProfileContainerWithRouter = withRouter(ProfileContainer);

export default connect(mapStateToProps, {
    getProfile,
})(ProfileContainerWithRouter);