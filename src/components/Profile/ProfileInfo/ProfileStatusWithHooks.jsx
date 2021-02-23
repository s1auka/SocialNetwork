import React, { useEffect, useState } from 'react';

const ProfileStatusWithHooks = (props) => {
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    const activateEditMode = () => {
        setEditMode(true);
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }

    const onStatusChange = (e) => {
        let text = e.target.value;
        setStatus(text);
    }

    useEffect(() => {
        setStatus(props.status);
    }, [props.status]);

    return (
        <div>
            {(!editMode) &&
                <div>
                    <span onDoubleClick={activateEditMode}> {props.status || "-----"}</span>
                </div>
            }
            {(editMode) &&
                <div>
                    <input autoFocus onChange={onStatusChange} value={status} onBlur={deactivateEditMode} />
                </div>
            }
        </div >
    )

}

export default ProfileStatusWithHooks;