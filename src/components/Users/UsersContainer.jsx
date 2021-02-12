import React from 'react';
import { connect } from "react-redux";
import { setCurrentPage, setUsersAC, setUsersAmountAC, toggleIsFetching, toggleFollowActionCreator, toggleFollowingInProgress } from "../../redux/user-reducer";
import Users from "./Users";
import Preloader from '../common/Preloader/Preloader';
import { userAPI } from "../../api/api";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true);

        userAPI.getUsers(this.props.currentPage, this.props.usersOnPage).then(data => {
            this.props.addUsers(data.items);
            this.props.setTotalCount(data.totalCount);
            this.props.toggleIsFetching(false);
        })
    }

    toggleFollow = (id, isFollow) => {

        let toggleButtonDisabled = (id) => {
            this.props.toggleFollowingInProgress(id);

        }

        toggleButtonDisabled(id);
        if (!isFollow) {
            userAPI.followUser(id).then(data => {
                if (data.resultCode === 0) {
                    this.props.onToggleFollow(id);
                    toggleButtonDisabled(id);
                }

            })
        } else {
            userAPI.unFollowUser(id).then(data => {
                if (data.resultCode === 0) {
                    this.props.onToggleFollow(id);
                    toggleButtonDisabled(id);
                }

            })
        }
    }

    onPageChanged = (page) => {
        this.props.toggleIsFetching(true);
        this.props.setCurrentPage(page);

        userAPI.getUsers(page, this.props.usersOnPage).then(data => {
            this.props.addUsers(data.items);
            this.props.toggleIsFetching(false);
        })
    }

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader /> : null}
                <Users users={this.props.users}
                    toggleFollow={this.toggleFollow}
                    totalCount={this.props.totalCount}
                    usersOnPage={this.props.usersOnPage}
                    currentPage={this.props.currentPage}
                    onPageChanged={this.onPageChanged}
                    isFetching={this.props.isFetching}
                    followingInProgress={this.props.followingInProgress}
                />
            </>

        )
    }
}


let mapStateToProps = (state) => {
    return {
        users: state.usersInfo.users,
        totalCount: state.usersInfo.totalCount,
        currentPage: state.usersInfo.currentPage,
        usersOnPage: state.usersInfo.AMT_USERS_ON_PAGE,
        isFetching: state.usersInfo.isFetching,
        followingInProgress: state.usersInfo.followingInProgress,
    }
}

export default connect(mapStateToProps, {
    onToggleFollow: toggleFollowActionCreator,
    addUsers: setUsersAC,
    setTotalCount: setUsersAmountAC,
    toggleIsFetching,
    setCurrentPage,
    toggleFollowingInProgress,
})(UsersContainer);