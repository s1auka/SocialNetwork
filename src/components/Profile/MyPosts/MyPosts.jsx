import React from 'react';
import componentStyle from './MyPosts.module.css';
import OldPost from './OldPost/OldPost';

const MyPosts = (props) => {

    let oldMessagesComponents = props.contentMessages.map(el => {
        return (
            <OldPost message={el} />
        );
    })

    let newPostEl = React.createRef();

    let addPost = () => {
        props.addPost();
    }

    let updateNewPost = () => {
        props.updateNewPost(newPostEl.current.value);
    }

    return (
        <div className={componentStyle.posts}>
            <h3>My Posts</h3>
            <textarea ref={newPostEl} onChange={updateNewPost} value={props.newPostText}></textarea>
            <button onClick={addPost}>Add post</button>
            {oldMessagesComponents}
        </div>
    )
}

export default MyPosts;