import React from 'react';

import componentStyle from './MyPosts.module.css';
import OldPost from './OldPost/OldPost';



const MyPosts = (props) => {
    let oldMessagesComponents = props.oldMessages.map(el => {
        return (
            <OldPost message={el} />
        );
    })


    let onAddPost = () => {
        props.addPost();
    }

    let updateNewPost = (e) => {
        let text = e.target.value;

        props.updateNewPost(text);
    }

    return (
        <div className={componentStyle.posts}>
            <h3>My Posts</h3>
            <textarea onChange={updateNewPost} value={props.newPostText}></textarea>
            <button onClick={onAddPost}>Add post</button>
            {oldMessagesComponents}
        </div>
    )
}

export default MyPosts;