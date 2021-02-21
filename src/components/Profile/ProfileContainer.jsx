import React from 'react';
import Profile from './Profile';
import { connect } from "react-redux";
import { getProfile, getStatus, updateStatus } from "../../redux/profile-reducer";
import { withRouter } from 'react-router-dom';
//import { withAuthRedirect } from '../../hoc/WIthAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId;
            if (!userId) {
                this.props.history.push("/auth/login");
            }
        }
        this.props.getProfile(userId);
        this.props.getStatus(userId);
    }


    render() {
        return <Profile userProfile={this.props.userProfile} status={this.props.status} updateStatus={this.props.updateStatus} />
    }
}

let mapStateToProps = (state) => ({
    userProfile: state.profileInfo.userProfile,
    status: state.profileInfo.status,
    authorizedUserId: state.auth.id,

})

export default compose(
    connect(mapStateToProps, {
        getProfile,
        getStatus,
        updateStatus,
    }),
    withRouter,
    // withAuthRedirect,
)(ProfileContainer);