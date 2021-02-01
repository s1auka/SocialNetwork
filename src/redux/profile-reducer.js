const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const profileReducer = (state, action) => {

    switch (action.type) {
        case ADD_POST:
            state.oldMessages.push(state.newPostMessage);
            state.newPostMessage = '';
            break;
        case UPDATE_NEW_POST_TEXT:
            state.newPostMessage = action.newText;
            break;
        default:
            break;
    }

    return state;
}

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text, });

export default profileReducer;