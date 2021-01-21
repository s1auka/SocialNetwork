import React from 'react';

const NewMessage = () => {
    let newDialogMessage = React.createRef();

    let addMessage = () => {
        let text = newDialogMessage.current.value;
        alert(text);
    }

    return (
        <div>
            <textarea ref={newDialogMessage}></textarea>
            <button onClick={addMessage}>sent</button>
        </div>
    )
}

export default NewMessage;