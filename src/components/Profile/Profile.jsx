
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';




const Profile = (props) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts contentMessages={props.profileState.oldMessages} newPostText={props.profileState.newPostMessage} dispatch={props.dispatch} />
        </div>
    )
}

export default Profile;