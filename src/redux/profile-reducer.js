import { profileAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";
const SET_PHOTO = "SET_PHOTO";

const initialState = {
    oldMessages: [
        "Lorem Ipsum is simply dummy text of the printing",
        "and typesetting industry. Lorem Ipsum has been the industry's standard",
        "dummy text ever since the 1500s, when an unknown printer took a galley",
    ],
    userProfile: null,
    status: "",
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                oldMessages: [...state.oldMessages, action.message],
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status,
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                userProfile: { ...action.userProfile },
            }
        case SET_PHOTO:
            return {
                ...state,
                userProfile: { ...state.userProfile, photos: action.photos },
            }
        default:
            break;
    }

    return state;
}

export const addPost = (message) => ({ type: ADD_POST, message });
export const setUserProfile = (userProfile) => ({ type: SET_USER_PROFILE, userProfile });
export const setStatus = (status) => ({ type: SET_STATUS, status });
export const setUserPhoto = (photos) => ({ type: SET_PHOTO, photos });

export const getProfile = (id) => (dispatch) => {
    profileAPI.getProfile(id)
        .then(data => {
            dispatch(setUserProfile(data));
        })
}

export const getStatus = (id) => (dispatch) => {
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

export const savePhoto = (photo) => (dispatch) => {
    profileAPI.savePhoto(photo)
        .then(data => {
            if (data.resultCode === 0) {
                //dispatch(setPhoto(status));
                dispatch(setUserPhoto(data.data.photos));
            }

        })
}

export default profileReducer;