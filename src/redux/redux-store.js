import { combineReducers, createStore } from "redux";
import dialogReducer from './dialog-reducer';
import profileReducer from './profile-reducer';
import userReducer from "./user-reducer";

let reducers = combineReducers({
    profileInfo: profileReducer,
    dialogsInfo: dialogReducer,
    usersInfo: userReducer,
})

let store = createStore(reducers);

export default store;