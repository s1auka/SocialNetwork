import React from 'react';
import Profile from './Profile';
import {connect} from "react-redux";
import axios from "axios";
import {setUserProfileAC as setUserProfile} from "../../redux/profile-reducer";




class ProfileContainer extends React.Component {
    componentDidMount() {

        axios.get("https://social-network.samuraijs.com//api/1.0/profile/14426")
            .then(response => {
                this.props.setUserProfile(response.data);
            })
    }

    render(){
        return <Profile userProfile={this.props.userProfile}/>
    }
}

let mapStateToProps = (state) => ({
    userProfile: state.profileInfo.userProfile,

})

export default connect(mapStateToProps, {
    setUserProfile,
})(ProfileContainer);