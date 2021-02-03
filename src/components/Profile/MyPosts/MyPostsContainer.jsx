import { addPostActionCreator, updateNewPostActionCreator } from '../../../redux/profile-reducer';
import { connect } from 'react-redux';
import MyPosts from './MyPosts';

let mapStateToProps = (state) => {
    return {
        oldMessages: state.profileInfo.oldMessages,
        newPostText: state.profileInfo.newPostMessage,
    }

}


let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            let action = addPostActionCreator();
            dispatch(action);
        },

        updateNewPost: (text) => {
            let action = updateNewPostActionCreator(text);
            dispatch(action);
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;