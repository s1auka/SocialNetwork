import React from 'react';
import Profile from './Profile';
import { connect } from "react-redux";
import { getProfile, getStatus, updateStatus } from "../../redux/profile-reducer";
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/WIthAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        this.props.getProfile(userId);
        this.props.getStatus(userId);
    }


    render() {
        //if (!this.props.isAuth) return <Redirect to='/auth/login' /> //how to redirect back to profile
        return <Profile userProfile={this.props.userProfile} status={this.props.status} updateStatus={this.props.updateStatus} />
    }
}

let mapStateToProps = (state) => ({
    userProfile: state.profileInfo.userProfile,
    status: state.profileInfo.status,

})

export default compose(
    connect(mapStateToProps, {
        getProfile,
        getStatus,
        updateStatus,
    }),
    withRouter,
    withAuthRedirect,
)(ProfileContainer);