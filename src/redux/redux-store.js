import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import authReducer from "./auth-reducer";
import dialogReducer from './dialog-reducer';
import profileReducer from './profile-reducer';
import userReducer from "./user-reducer";

let reducers = combineReducers({
    profileInfo: profileReducer,
    dialogsInfo: dialogReducer,
    usersInfo: userReducer,
    auth: authReducer,
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;