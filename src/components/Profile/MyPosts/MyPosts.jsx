import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { maxLength, required } from '../../../utils/validators/validators';
import { editableField } from '../../common/formFields/formFields';

import componentStyle from './MyPosts.module.css';
import OldPost from './OldPost/OldPost';

const POST_MAX_LENGTH = 30;

let maxLengthValidator = maxLength(POST_MAX_LENGTH);

const MyPosts = (props) => {
    let oldMessagesComponents = props.oldMessages.map(el => {
        return (
            <OldPost message={el} />
        );
    })

    let onNewPostSubmit = (formData) => {
        props.addPost(formData.textarea);
    }

    return (
        <div className={componentStyle.posts}>
            <h3>My Posts</h3>
            <NewPostForm onSubmit={onNewPostSubmit} />
            {oldMessagesComponents}
        </div>
    )
}

const NewPost = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={editableField} el="textarea" name="textarea" validate={[required, maxLengthValidator]} />
            <button>Add post</button>
        </form>
    )
}

const NewPostForm = reduxForm({ form: "newPostForm" })(NewPost);

export default MyPosts;