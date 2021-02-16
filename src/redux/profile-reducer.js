import { profileAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";

const initialState = {
    oldMessages: [
        "Lorem Ipsum is simply dummy text of the printing",
        "and typesetting industry. Lorem Ipsum has been the industry's standard",
        "dummy text ever since the 1500s, when an unknown printer took a galley",
    ],
    newPostMessage: '',
    userProfile: null,
    status: "",
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
        case SET_STATUS:
            return {
                ...state,
                status: action.status,
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
export const setStatus = (status) => ({ type: SET_STATUS, status });

export const getProfile = (id) => (dispatch) => {
    if (!id) {
        id = 14677;
    }
    profileAPI.getProfile(id)
        .then(data => {
            dispatch(setUserProfile(data));
        })
}

export const getStatus = (id) => (dispatch) => {
    if (!id) {
        id = 14677;
    }
    profileAPI.getStatus(id)
        .then(data => {
            dispatch(setStatus(data));
        })
}

export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status)
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(setStatus(status));
            }

        })
}

export default profileReducer;