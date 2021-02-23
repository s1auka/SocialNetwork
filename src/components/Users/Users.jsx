import React from 'react';
import { NavLink } from 'react-router-dom';
import defaultImage from "../../assets/images/default-logo.png";
import styles from "./Users.module.css";

const Users = (props) => {
    let _usersToJSX = () => {
        let users = props.users.map((el, index) => {
            return (
                <div key={index.toString()} className={styles.userBlock}>
                    <NavLink to={'/profile/' + el.id}>
                        <img src={el.photos.small || defaultImage} alt="logo" />
                    </NavLink>
                    <button data-userid={el.id} disabled={props.followingInProgress.includes(el.id)} onClick={(e) => { props.toggleFollow(el.id, el.followed) }}>{el.followed ? 'UNFOLLOW' : 'FOLLOW'}</button>
                    <span> {el.name} </span>
                    <span> "el.location.city-el.location.country" </span>
                </div >
            )
        });

        return users;
    }

    let pagesCount = Math.ceil(props.totalCount / props.usersOnPage);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            <h2>USERS</h2>
            <div className={styles.pagination}>
                {pages.map((p, index) => {
                    return <span key={index.toString()} className={(props.currentPage === p) ? styles.selectedPage : undefined} onClick={(e) => { props.onPageChanged(p) }}>{p}</span>
                })
                }
            </div>
            { _usersToJSX()}
        </div >
    )
}


export default Users;
