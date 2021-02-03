import { combineReducers, createStore } from "redux";
import dialogReducer from './dialog-reducer';
import profileReducer from './profile-reducer';
import usersReducer from "./users-reducer";

let reducers = combineReducers({
    profileInfo: profileReducer,
    dialogsInfo: dialogReducer,
    usersInfo: usersReducer,
})

let store = createStore(reducers);

export default store;