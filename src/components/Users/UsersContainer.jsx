import React from 'react';
import { connect } from "react-redux";
import { getUsers, toggleFollow } from "../../redux/user-reducer";
import Users from "./Users";
import Preloader from '../common/Preloader/Preloader';
import { getCurrentPage, getTotalUsersCount, checkIsFetching, followingInProgressStatus, getUsersSelector } from "../../redux/users-selector";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.usersOnPage);
    }

    toggleFollow = (id, isFollow) => {
        this.props.toggleFollow(id, isFollow);
    }

    onPageChanged = (page) => {
        this.props.getUsers(page, this.props.usersOnPage);
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
        users: getUsersSelector(state),
        totalCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        usersOnPage: state.usersInfo.AMT_USERS_ON_PAGE,
        isFetching: checkIsFetching(state),
        followingInProgress: followingInProgressStatus(state),
    }
}

export default connect(mapStateToProps, {
    getUsers,
    toggleFollow,
})(UsersContainer);