import profileReducer, { addPost } from "./profile-reducer";

it('length of posts should be incremented', () => {
    let action = addPost('new test Post');
    const state = {
        oldMessages: [
            "Lorem Ipsum is simply dummy text of the printing",
            "and typesetting industry. Lorem Ipsum has been the industry's standard",
            "dummy text ever since the 1500s, when an unknown printer took a galley",
        ],
    }


    let newState = profileReducer(state, action);

    expect(newState.oldMessages.length).toBe(4);
});  