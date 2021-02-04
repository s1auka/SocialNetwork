//import React from 'react';

const User = (props) => {
    debugger
    if (props.users.length === 0) {
        let initialUsers = [
            { id: 1, followed: true, fullName: "John D.", location: { city: 'Boston', country: "USA" } },
            { id: 2, followed: false, fullName: "Tomas M.", location: { city: 'Munich', country: "Germany" } },
            { id: 3, followed: true, fullName: "Gianluca Z.", location: { city: 'Turin', country: "Italy" } },
        ];
        props.addUsers(initialUsers);
    }


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
