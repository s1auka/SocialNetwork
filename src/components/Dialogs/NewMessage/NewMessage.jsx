import React from 'react';
import { addMessageActionCreator, updateNewDialogActionCreator } from '../../../redux/dialog-reducer';


const NewMessage = (props) => {
    let newDialogMessage = React.createRef();

    let addMessage = () => {
        props.dispatch(addMessageActionCreator());
    }

    let updateMessage = () => {
        let text = newDialogMessage.current.value;
        props.dispatch(updateNewDialogActionCreator(text));
    }

    return (
        <div>
            <textarea ref={newDialogMessage} onChange={updateMessage} value={props.newDialogMessage}></textarea>
            <button onClick={addMessage}>sent</button>
        </div>
    )
}

export default NewMessage;