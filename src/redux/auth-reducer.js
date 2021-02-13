import { authAPI } from "../api/api";

// const TOGGLE_IS_AUTH = "TOGGLE_IS_AUTH";
const SET_AUTH_INFO = "SET_AUTH_INFO";

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,

}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_INFO:
            return {
                ...state,
                ...action.data,
                isAuth: true,
            }

        /* case TOGGLE_IS_AUTH:
            return {
                ...state,
                isAuth: action.isAuth,
            } */
        default:
            return state;
    }
}

export const setAuthInfo = (email, id, login) => ({ type: SET_AUTH_INFO, data: { email, id, login } });

export const getAuth = () => (dispatch) => {
    authAPI.me()
        .then(data => {
            if (data.resultCode === 0) {
                let { email, id, login } = data.data;
                dispatch(setAuthInfo(email, id, login));
            }
        })
}

export default authReducer;