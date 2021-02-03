const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const initialState = {
    oldMessages: [
        "Lorem Ipsum is simply dummy text of the printing",
        "and typesetting industry. Lorem Ipsum has been the industry's standard",
        "dummy text ever since the 1500s, when an unknown printer took a galley",
    ],
    newPostMessage: '',
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                oldMessages: [...state.oldMessages, state.newPostMessage],
                newPostMessage: "",

            }

        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostMessage: action.newText,
            }

        default:
            break;
    }

    return state;
}

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text, });

export default profileReducer;