import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { maxLength, required } from '../../../utils/validators/validators';
import { editableField } from '../../common/formFields/formFields';

const MESSAGE_MAX_LENGTH = 10;
const maxLengthCreator = maxLength(MESSAGE_MAX_LENGTH);

const NewMessage = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={editableField} el="textarea" name="textarea" validate={[required, maxLengthCreator]} />
            <button>sent</button>
        </form>
    )
}

const NewMessageForm = reduxForm({ form: "newMessage" })(NewMessage);

export default NewMessageForm;