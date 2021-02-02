import React from 'react';

const NewMessage = (props) => {
    debugger
    let addMessage = () => {
        props.addMessage();
    }

    let updateMessage = (e) => {
        let text = e.target.value;
        props.updateMessage(text);
    }

    return (
        <div>
            <textarea onChange={updateMessage} value={props.newDialogMessage}></textarea>
            <button onClick={addMessage}>sent</button>
        </div>
    )
}

export default NewMessage;