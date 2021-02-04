//import React from 'react';

const User = (props) => {
    debugger
    let toggleFollow = (e) => {
        let userId = e.target.dataset.userid;

        props.onToggleFollow(userId);
    }
    let users = props.users.map(el => {

        return (
            <div>
                <button data-userid={el.id} onClick={toggleFollow}>{el.followed ? 'UNFOLLOW' : 'FOLLOW'}</button>
                <span> {el.fullName} </span>
                <span> {el.location.city}-{el.location.country} </span>
            </div >
        )
    })

    return (
        <div>
            <h2>USERS</h2>
            {users}
        </div>
    )
}

export default User;
