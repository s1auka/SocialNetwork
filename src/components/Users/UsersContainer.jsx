import React from 'react';
import axios from "axios";
import { connect } from "react-redux";
import { setCurrentPage, setUsersAC, setUsersAmountAC, toggleIsFetching, toggleFollowActionCreator } from "../../redux/user-reducer";
import Users from "./Users";
import Preloader from '../common/Preloader/Preloader';

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get("https://social-network.samuraijs.com//api/1.0/users", {
            params: {
                page: this.props.currentPage, count: this.props.usersOnPage
            },
            withCredentials: true,
        })
            .then(response => {
                this.props.addUsers(response.data.items);
                this.props.setTotalCount(response.data.totalCount);
                this.props.toggleIsFetching(false);
            })
    }

    toggleFollow = (id, isFollow) => {

        if (!isFollow) {
            axios.post("https://social-network.samuraijs.com//api/1.0/follow/" + id, {}, {
                withCredentials: true,
                headers: {
                    "API-KEY": "aea2f3f0-bccb-4d40-b4d3-b82ab30e1c09",
                },
            })
                .then(response => {
                    if (response.data.resultCode === 0) {
                        this.props.onToggleFollow(id);
                    }

                })
        } else {
            axios.delete("https://social-network.samuraijs.com//api/1.0/follow/" + id, {
                withCredentials: true,
                headers: {
                    "API-KEY": "aea2f3f0-bccb-4d40-b4d3-b82ab30e1c09",
                },
            })
                .then(response => {
                    if (response.data.resultCode === 0) {
                        this.props.onToggleFollow(id);
                    }

                })
        }
    }

    onPageChanged = (page) => {
        this.props.toggleIsFetching(true);
        this.props.setCurrentPage(page);

        axios.get("https://social-network.samuraijs.com//api/1.0/users", {
            params: {
                page: page,
                count: this.props.usersOnPage,
            },
            withCredentials: true,

        })
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

export default connect(mapStateToProps, {
    onToggleFollow: toggleFollowActionCreator,
    addUsers: setUsersAC,
    setTotalCount: setUsersAmountAC,
    toggleIsFetching,
    setCurrentPage,
})(UsersContainer);