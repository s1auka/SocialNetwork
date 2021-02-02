import { addPostActionCreator, updateNewPostActionCreator } from '../../../redux/profile-reducer';
import { connect } from 'react-redux';
import MyPosts from './MyPosts';



/* const MyPostsContainer = (props) => {

    let addPost = () => {
        let action = addPostActionCreator();
        props.dispatch(action);
    }

    let updateNewPost = (text) => {
        let action = updateNewPostActionCreator(text)
        props.dispatch(action);
    }

    return (
        <MyPosts addPost={addPost} updateNewPost={updateNewPost} newPostText={props.newPostText} oldMessages={props.contentMessages} />
    )
}
 */

let mapStateToProps = (state) => {
    debugger
    return {
        newPostText: state.profileInfo.newPostText,
        oldMessages: state.profileInfo.oldMessages,
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