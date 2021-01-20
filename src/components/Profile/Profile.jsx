
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';




const Profile = (props) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts contentMessages={props.profileState} />
        </div>
    )
}

export default Profile;