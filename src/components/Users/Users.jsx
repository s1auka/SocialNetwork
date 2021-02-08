import React from 'react';
import defaultImage from "../../assets/images/default-logo.png";
import styles from "./Users.module.css";

const Users = (props) => {

    let _usersToJSX = () => {
        let users = props.users.map(el => {
            return (
                <div className={styles.userBlock}>
                    <img src={el.photos.small || defaultImage} alt="logo" />
                    <button data-userid={el.id} onClick={props.toggleFollow}>{el.followed ? 'UNFOLLOW' : 'FOLLOW'}</button>
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
            <div>
                {pages.map(p => {
                    return <span className={props.currentPage === p && styles.selectedPage} onClick={(e) => { props.onPageChanged(p) }}>{p}</span>
                })
                }
            </div>
            { _usersToJSX()}
        </div >
    )
}


export default Users;
