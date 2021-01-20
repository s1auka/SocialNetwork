import NewMessage from "./NewMessage/NewMessage";

const DialogMessage = (props) => {
    return (
        <div>
            <div>
                {props.message}

            </div>
            <NewMessage />
        </div>
    );
}

export default DialogMessage;