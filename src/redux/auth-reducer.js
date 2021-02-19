import { stopSubmit } from "redux-form";
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

export const setAuthInfo = (email, id, login, isAuth) => ({ type: SET_AUTH_INFO, data: { email, id, login, isAuth } });

export const getAuth = () => (dispatch) => {
    authAPI.me()
        .then(data => {
            if (data.resultCode === 0) {
                let { email, id, login } = data.data;
                dispatch(setAuthInfo(email, id, login, true));
            }
        })
}

export const login = (email, password, rememberMe) => (dispatch) => {
    authAPI.login(email, password, rememberMe)
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(getAuth());
            } else {
                let message = data.messages.length ? data.messages[0] : "some error";
                let action = stopSubmit("login", { _error: message });
                dispatch(action);
            }
        })
}

export const logout = () => (dispatch) => {
    authAPI.logout()
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(setAuthInfo(null, null, null, false));
            }
        })
}

export default authReducer;