import React from 'react';
import { Field, reduxForm } from 'redux-form';

const NewMessage = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component="textarea" name="textarea" />
            <button>sent</button>
        </form>
    )
}

const NewMessageForm = reduxForm({ form: "newMessage" })(NewMessage);

export default NewMessageForm;