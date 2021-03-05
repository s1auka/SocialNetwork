import React from 'react';
import { NavLink } from 'react-router-dom';
import defaultImage from "../../assets/images/default-logo.png";
import Paginator from '../common/Paginator/Paginator';
import styles from "./Users.module.css";

const Users = (props) => {
    let _usersToJSX = () => {
        let users = props.users.map((el, index) => {
            return (
                <div key={index.toString()} className={styles.userBlock}>
                    <NavLink to={'/profile/' + el.id}>
                        <img src={el.photos.small || defaultImage} alt="logo" />
                    </NavLink>
                    {props.isAuth && <button data-userid={el.id} disabled={props.followingInProgress.includes(el.id)} onClick={(e) => { props.toggleFollow(el.id, el.followed) }}>{el.followed ? 'UNFOLLOW' : 'FOLLOW'}</button>}
                    <span> {el.name} </span>
                    <span> "el.location.city-el.location.country" </span>
                </div >
            )
        });

        return users;
    }

    return (
        <div>
            <h2>USERS</h2>
            <Paginator totalCount={props.totalCount} currentPage={props.currentPage} usersOnPage={props.usersOnPage} onPageChanged={props.onPageChanged} />
            { _usersToJSX()}
        </div >
    )
}


export default Users;
