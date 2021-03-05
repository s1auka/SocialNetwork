import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import authReducer from "./auth-reducer";
import dialogReducer from './dialog-reducer';
import profileReducer from './profile-reducer';
import userReducer from "./user-reducer";
import { reducer as formReducer } from "redux-form";
import navReducer from "./nav-reducer";
import appReducer from "./app-reducer";


let reducers = combineReducers({
    profileInfo: profileReducer,
    dialogsInfo: dialogReducer,
    usersInfo: userReducer,
    auth: authReducer,
    form: formReducer,
    navBar: navReducer,
    app: appReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

//let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;