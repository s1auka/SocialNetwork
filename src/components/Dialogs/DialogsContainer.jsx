import Dialogs from './Dialogs';
import { addMessageActionCreator, updateNewDialogActionCreator } from '../../redux/dialog-reducer';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/WIthAuthRedirect';
import { compose } from 'redux';

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

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect,
)(Dialogs);;