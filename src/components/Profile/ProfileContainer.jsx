import React from 'react';
import Profile from './Profile';
import { connect } from "react-redux";
import { getProfile, getStatus, updateStatus, savePhoto } from "../../redux/profile-reducer";
import { withRouter } from 'react-router-dom';
//import { withAuthRedirect } from '../../hoc/WIthAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {
    refreshProfile = () => {
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
    componentDidMount() {
        this.refreshProfile();
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile();
        }
    }

    render() {
        return <Profile userProfile={this.props.userProfile}
            status={this.props.status}
            isOwner={!this.props.match.params.userId}
            updateStatus={this.props.updateStatus}
            savePhoto={this.props.savePhoto} />
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
        savePhoto,
    }),
    withRouter,
    // withAuthRedirect,
)(ProfileContainer);