import DialogItem from './DialogItem/DialogItem';
import DialogMessage from './DialogMessage/DialogMessage';
import cStyle from './Dialogs.module.css'
import NewMessageForm from './NewMessage/NewMessage';

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

    let onNewMessageSubmit = (formData) => {
        props.addNewMessage(formData.textarea);
    }

    return (
        <div>
            <div className={cStyle.dialogGrid}>
                <div>
                    <div>Dialogs</div>
                    {dialogComponentsItems}
                </div>
                <div>
                    {dialogComponentsMessages}
                    <NewMessageForm onSubmit={onNewMessageSubmit} />
                </div>
            </div>
        </div>
    )
}

export default Dialogs;