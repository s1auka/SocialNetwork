import React from 'react';
import axios from "axios";
import defaultImage from "../../assets/images/default-logo.png";
import styles from "./User.module.css";

class User extends React.Component {

    getUsers = () => {
        if (this.props.users.length === 0) {
            axios.get("https://social-network.samuraijs.com//api/1.0/users", { params: { page: 921 } })
                .then(response => {
                    this.props.addUsers(response.data.items);
                })

        }
    }

    usersToJSX = () => {
        let users = this.props.users.map(el => {
            return (
                <div className={styles.userBlock}>
                    <img src={el.photos.small || defaultImage} alt="logo" />
                    <button data-userid={el.id} onClick={this.toggleFollow}>{el.followed ? 'UNFOLLOW' : 'FOLLOW'}</button>
                    <span> {el.name} </span>
                    <span> "el.location.city-el.location.country" </span>
                </div >
            )
        });

        return users;
    }

    toggleFollow = (e) => {
        let userId = e.target.dataset.userid;

        this.props.onToggleFollow(userId);
    }


    render() {
        return (
            <div>
                <button onClick={this.getUsers}>Get Users</button>
                <h2>USERS</h2>
                {this.usersToJSX()}
            </div>
        )
    }
}


export default User;
