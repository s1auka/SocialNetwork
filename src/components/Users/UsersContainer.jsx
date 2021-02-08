import React from 'react';
import axios from "axios";
import { connect } from "react-redux";
import { setCurrentPageAC, setUsersAC, setUsersAmountAC, toggleIsFetchingAC, toggleFollowActionCreator } from "../../redux/user-reducer";
import Users from "./Users";
import Preloader from '../common/Preloader/Preloader';

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get("https://social-network.samuraijs.com//api/1.0/users", { params: { page: this.props.currentPage, count: this.props.usersOnPage } })
            .then(response => {
                this.props.addUsers(response.data.items);
                this.props.setTotalCount(response.data.totalCount);
                this.props.toggleIsFetching(false);
            })
    }

    toggleFollow = (e) => {
        let userId = e.target.dataset.userid;

        this.props.onToggleFollow(userId);
    }

    onPageChanged = (page) => {
        this.props.toggleIsFetching(true);
        this.props.setCurrentPage(page);

        axios.get("https://social-network.samuraijs.com//api/1.0/users", { params: { page: page, count: this.props.usersOnPage } })
            .then(response => {
                this.props.addUsers(response.data.items);
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
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        onToggleFollow: (userId) => {
            let action = toggleFollowActionCreator(userId);
            dispatch(action);
        },
        addUsers: (users) => {
            let action = setUsersAC(users);
            dispatch(action);
        },
        setCurrentPage: (currentPage) => {
            let action = setCurrentPageAC(currentPage);
            dispatch(action);
        },
        setTotalCount: (totalCount) => {
            let action = setUsersAmountAC(totalCount);
            dispatch(action);
        },
        toggleIsFetching: (isFetching) => {
            let action = toggleIsFetchingAC(isFetching);
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);