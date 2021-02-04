const TOGGLE_FOLLOW = 'TOGGLE_FOLLOW';
const SET_USERS = "SET_USERS";


const initialState = {
    users: [],
    // users: [
    //     { id: 1, followed: true, fullName: "John D.", location: { city: 'Boston', country: "USA" } },
    //     { id: 2, followed: false, fullName: "Tomas M.", location: { city: 'Munich', country: "Germany" } },
    //     { id: 3, followed: true, fullName: "Gianluca Z.", location: { city: 'Turin', country: "Italy" } },
    // ],

}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FOLLOW:
            return {
                ...state,
                users: state.users.map(el => {
                    if (el.id === Number(action.userId)) {
                        el.followed = !el.followed;
                    }
                    return el;
                })
            }
        case SET_USERS:
            return {
                ...state,
                users: [...state.users, ...action.users],
            }

        default:
            break;
    }

    return state;
}

export const toggleFollowActionCreator = (userId) => ({ type: TOGGLE_FOLLOW, userId: userId });
export const setUsersAC = (users) => ({ type: SET_USERS, users });

export default userReducer;