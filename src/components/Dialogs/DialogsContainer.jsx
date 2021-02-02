import Dialogs from './Dialogs';
import { addMessageActionCreator, updateNewDialogActionCreator } from '../../redux/dialog-reducer';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        dialogsState: state.dialogsInfo,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addNewMessage: () => {
            dispatch(addMessageActionCreator())
        },
        updateMessage: (text) => {
            dispatch(updateNewDialogActionCreator(text));
        },
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;