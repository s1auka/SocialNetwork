const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';

const initialState = {
    users: [
        { id: 1, follow: true, fullName: "John D.", location: { city: 'Boston', country: "USA" } },
        { id: 2, follow: false, fullName: "Tomas M.", location: { city: 'Munich', country: "Germany" } },
        { id: 3, follow: true, fullName: "Gianluca Z.", location: { city: 'Turin', country: "Italy" } },
    ]
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                follow: true,
            }
        case UNFOLLOW:
            return {
                ...state,
                follow: false,
            }
        default:
            break;
    }

    return state;
}

export const followActionCreator = () => ({ type: FOLLOW });
export const unFollowActionCreator = () => ({ type: UNFOLLOW });

export default usersReducer;