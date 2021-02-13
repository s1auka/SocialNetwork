import { userAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = "SET_USER_PROFILE";

const initialState = {
    oldMessages: [
        "Lorem Ipsum is simply dummy text of the printing",
        "and typesetting industry. Lorem Ipsum has been the industry's standard",
        "dummy text ever since the 1500s, when an unknown printer took a galley",
    ],
    newPostMessage: '',
    userProfile: null,
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            if (!state.newPostMessage) {
                break;
            }
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
        case SET_USER_PROFILE:
            return {
                ...state,
                userProfile: { ...action.userProfile },
            }
        default:
            break;
    }

    return state;
}

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text, });
export const setUserProfile = (userProfile) => ({ type: SET_USER_PROFILE, userProfile });

export const getProfile = (id) => (dispatch) => {
    if (!id) {
        id = 2;
    }
    userAPI.getProfile(id)
        .then(data => {
            dispatch(setUserProfile(data));
        })
}

export default profileReducer;