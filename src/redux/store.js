import profileReducer from './profile-reducer';
import dialogReducer from './dialog-reducer';



let store = {
    _state: {
        dialogsInfo: {
            dialogItems: [
                { name: 'Igor', id: 1 },
                { name: 'Eugene', id: 2 },
                { name: 'Taras', id: 3 },
                { name: 'Bill', id: 4 },
                { name: 'Doherty', id: 5 },
            ],
            dialogMessages: [
                { message: 'How are you?', id: 1 },
                { message: 'I"m fine ', id: 2 },
                { message: 'cooool', id: 3 },
            ],
            newDialogMessage: '',
        },
        profileInfo: {
            oldMessages: [
                "Lorem Ipsum is simply dummy text of the printing",
                "and typesetting industry. Lorem Ipsum has been the industry's standard",
                "dummy text ever since the 1500s, when an unknown printer took a galley",
            ],
            newPostMessage: '',
        },
    },
    _callSubscriber() {
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },


    dispatch(action) {
        this.getState().profileInfo = profileReducer(this.getState().profileInfo, action);
        this.getState().dialogsInfo = dialogReducer(this.getState().dialogsInfo, action);

        this._callSubscriber(this.getState());

    },
}





export default store;