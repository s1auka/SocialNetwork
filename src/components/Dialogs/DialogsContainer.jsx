import Dialogs from './Dialogs';
import { addNewMessage } from '../../redux/dialog-reducer';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/WIthAuthRedirect';
import { compose } from 'redux';

let mapStateToProps = (state) => {
    return {
        dialogsState: state.dialogsInfo,
    }
}

export default compose(
    connect(mapStateToProps, { addNewMessage }),
    withAuthRedirect,
)(Dialogs);;