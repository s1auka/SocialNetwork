import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import authReducer from "./auth-reducer";
import dialogReducer from './dialog-reducer';
import profileReducer from './profile-reducer';
import userReducer from "./user-reducer";
import { reducer as formReducer } from "redux-form";


let reducers = combineReducers({
    profileInfo: profileReducer,
    dialogsInfo: dialogReducer,
    usersInfo: userReducer,
    auth: authReducer,
    form: formReducer,
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;