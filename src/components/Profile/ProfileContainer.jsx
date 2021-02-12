import React from 'react';
import Profile from './Profile';
import { connect } from "react-redux";
import { setUserProfileAC as setUserProfile } from "../../redux/profile-reducer";
import { withRouter } from 'react-router-dom';
import { userAPI } from '../../api/api';




class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        userAPI.getProfile(userId)
            .then(data => {
                this.props.setUserProfile(data);
            })
    }

    render() {
        return <Profile userProfile={this.props.userProfile} />
    }
}

let mapStateToProps = (state) => ({
    userProfile: state.profileInfo.userProfile,

})

let ProfileContainerWithRouter = withRouter(ProfileContainer);

export default connect(mapStateToProps, {
    setUserProfile,
})(ProfileContainerWithRouter);