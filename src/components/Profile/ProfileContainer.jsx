import React from 'react';
import Profile from './Profile';
import { connect } from "react-redux";
import axios from "axios";
import { setUserProfileAC as setUserProfile } from "../../redux/profile-reducer";
import { withRouter } from 'react-router-dom';




class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        axios.get("https://social-network.samuraijs.com//api/1.0/profile/" + userId)
            .then(response => {
                this.props.setUserProfile(response.data);
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