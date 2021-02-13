import { userAPI } from "../api/api";

const TOGGLE_FOLLOW = 'TOGGLE_FOLLOW';
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_USERS_AMOUNT = "SET_USERS_AMOUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_FOLLOWING_IN_PROGRESS = "TOGGLE_FOLLOWING_IN_PROGRESS;"

const initialState = {
    users: [],
    totalCount: 0,
    AMT_USERS_ON_PAGE: 10,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FOLLOW:
            return {
                ...state,
                users: state.users.map(el => {
                    if (el.id === Number(action.userId)) {
                        el.followed = !el.followed;
                    }
                    return el;
                })
            }
        case SET_USERS:
            return {
                ...state,
                users: [...action.users],
            }
        case SET_USERS_AMOUNT:
            return { ...state, totalCount: action.totalCount }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.page,
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching,
            }
        case TOGGLE_FOLLOWING_IN_PROGRESS:
            return {
                ...state,
                followingInProgress: state.followingInProgress.includes(action.id) ?
                    state.followingInProgress.filter(id => id !== action.id)
                    : [...state.followingInProgress, action.id],
            }
        default:
            break;
    }

    return state;
}

export const toggleFollowActionCreator = (userId) => ({ type: TOGGLE_FOLLOW, userId: userId });
export const setUsersAC = (users, totalCount) => ({ type: SET_USERS, users, totalCount });
export const setCurrentPage = (page) => ({ type: SET_CURRENT_PAGE, page });
export const setUsersAmountAC = (totalCount) => ({ type: SET_USERS_AMOUNT, totalCount });
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })
export const toggleFollowingInProgress = (id) => ({ type: TOGGLE_FOLLOWING_IN_PROGRESS, id })


export const getUsers = (currentPage, usersOnPage) => (dispatch) => {
    dispatch(toggleIsFetching(true));
    dispatch(setCurrentPage(currentPage));

    userAPI.getUsers(currentPage, usersOnPage).then(data => {
        dispatch(setUsersAC(data.items));
        dispatch(setUsersAmountAC(data.totalCount));
        dispatch(toggleIsFetching(false));
    })
}

export const toggleFollow = (id, isFollow) => (dispatch) => {
    dispatch(toggleFollowingInProgress(id));


    if (!isFollow) {
        userAPI.followUser(id).then(data => {
            if (data.resultCode === 0) {
                dispatch(toggleFollowActionCreator(id));
                dispatch(toggleFollowingInProgress(id));
            }

        })
    } else {
        userAPI.unFollowUser(id).then(data => {
            if (data.resultCode === 0) {
                dispatch(toggleFollowActionCreator(id));
                dispatch(toggleFollowingInProgress(id));
            }

        })
    }
}

export default userReducer;