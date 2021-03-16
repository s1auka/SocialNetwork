import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';




const Profile = (props) => {
    return (
        <div>
            <ProfileInfo savePhoto={props.savePhoto} isOwner={props.isOwner} userProfile={props.userProfile} status={props.status} updateStatus={props.updateStatus} />
            <MyPostsContainer />
        </div>
    )
}

export default Profile;