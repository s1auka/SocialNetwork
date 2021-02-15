import React from 'react';
import Profile from './Profile';
import { connect } from "react-redux";
import { getProfile } from "../../redux/profile-reducer";
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/WIthAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {
    componentDidMount() {
        this.props.getProfile(this.props.match.params.userId);
    }


    render() {
        //if (!this.props.isAuth) return <Redirect to='/auth/login' /> //how to redirect back to profile
        return <Profile userProfile={this.props.userProfile} />
    }
}

let mapStateToProps = (state) => ({
    userProfile: state.profileInfo.userProfile,

})

export default compose(
    connect(mapStateToProps, {
        getProfile,
    }),
    withRouter,
    withAuthRedirect,
)(ProfileContainer);