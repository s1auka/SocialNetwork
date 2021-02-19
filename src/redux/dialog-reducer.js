const ADD_MESSAGE = 'ADD-MESSAGE';

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
}

const dialogReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE:
            return {
                ...state,
                dialogMessages: [...state.dialogMessages, { message: action.message, id: 5 }],
            }
        default:
            break;
    }

    return state;
}

export const addNewMessage = (message) => ({ type: ADD_MESSAGE, message });

export default dialogReducer;