import { connect } from "react-redux";
import { setUsersAC, toggleFollowActionCreator } from "../../redux/user-reducer";
import User from "./User";

let mapStateToProps = (state) => {
    return {
        users: state.usersInfo.users,
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
        }
    }
}

const UserContainer = connect(mapStateToProps, mapDispatchToProps)(User);

export default UserContainer;