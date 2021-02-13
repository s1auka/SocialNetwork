const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_DIALOG_TEXT = 'UPDATE-NEW-DIALOG-TEXT';

let initialState = {
    dialogItems: [
        { name: 'Igor', id: 1 },
        { name: 'Eugene', id: 2 },
        { name: 'Taras', id: 3 },
        { name: 'Bill', id: 4 },
        { name: 'Doherty', id: 5 },
    ],
    dialogMessages: [
        { message: 'How are you?', id: 1 },
        { message: 'I"m fine ', id: 2 },
        { message: 'cooool', id: 3 },
    ],
    newDialogMessage: '',
}

const dialogReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE:
            if (!state.newDialogMessage) {
                break;
            }
            return {
                ...state,
                dialogMessages: [...state.dialogMessages, { message: state.newDialogMessage, id: 5 }],
                newDialogMessage: '',
            }
        case UPDATE_NEW_DIALOG_TEXT:
            return {
                ...state,
                newDialogMessage: action.newText,
            }
        default:
            break;
    }

    return state;
}

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE });
export const updateNewDialogActionCreator = (text) => ({ type: UPDATE_NEW_DIALOG_TEXT, newText: text, });

export default dialogReducer;