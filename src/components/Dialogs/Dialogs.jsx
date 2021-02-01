import DialogItem from './DialogItem/DialogItem';
import DialogMessage from './DialogMessage/DialogMessage';
import cStyle from './Dialogs.module.css'
import NewMessage from './NewMessage/NewMessage';

const Dialogs = (props) => {
    let dialogComponentsItems = props.dialogsState.dialogItems.map(el => {
        return (
            <DialogItem name={el.name} id={el.id} />
        );
    })

    let dialogComponentsMessages = props.dialogsState.dialogMessages.map(el => {
        return (
            <DialogMessage message={el.message} id={el.id} />
        );
    })

    return (
        <div className={cStyle.dialogGrid}>
            <div>
                <div>Dialogs</div>
                {dialogComponentsItems}
            </div>
            <div>
                {dialogComponentsMessages}
                <NewMessage dispatch={props.dispatch} newDialogMessage={props.dialogsState.newDialogMessage} />
            </div>
        </div>
    )
}

export default Dialogs;