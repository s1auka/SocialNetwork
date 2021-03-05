import { createSelector } from "reselect";

const getUsers = (state) => {
    return state.usersInfo.users;
};

export const getUsersSelector = createSelector(getUsers, (users) => {
    return users.filter(user => true);
});

export const getTotalUsersCount = (state) => {
    return state.usersInfo.totalCount;
}

export const getCurrentPage = (state) => {
    return state.usersInfo.currentPage;
}

export const checkIsFetching = (state) => {
    return state.usersInfo.isFetching;
}

export const followingInProgressStatus = (state) => {
    return state.usersInfo.followingInProgress;
}

export const checkAuth = (state) => {
    return state.auth.isAuth;
}