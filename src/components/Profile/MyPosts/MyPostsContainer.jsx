import { addPost } from '../../../redux/profile-reducer';
import { connect } from 'react-redux';
import MyPosts from './MyPosts';

let mapStateToProps = (state) => {
    return {
        oldMessages: state.profileInfo.oldMessages,
        newPostText: state.profileInfo.newPostMessage,
    }

}

const MyPostsContainer = connect(mapStateToProps, { addPost })(MyPosts);

export default MyPostsContainer;