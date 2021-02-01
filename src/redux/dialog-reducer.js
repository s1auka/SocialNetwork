const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_DIALOG_TEXT = 'UPDATE-NEW-DIALOG-TEXT';

const dialogReducer = (state, action) => {

    switch (action.type) {
        case ADD_MESSAGE:
            state.dialogMessages.push({ message: state.newDialogMessage, id: 5 });
            state.newDialogMessage = '';
            break;
        case UPDATE_NEW_DIALOG_TEXT:
            state.newDialogMessage = action.newText;
            break;
        default:
            break;
    }

    return state;
}

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE });
export const updateNewDialogActionCreator = (text) => ({ type: UPDATE_NEW_DIALOG_TEXT, newText: text, });

export default dialogReducer;