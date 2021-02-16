import React from 'react';

class ProfileStatus extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editMode: false,
            status: this.props.status,
        };
    }

    activateEditMode = () => {
        this.setState({
            editMode: true,
        });
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false,
        });
        this.props.updateStatus(this.state.status);
    }
    onStatusChange = (status) => {
        this.setState({
            status: status,
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status)
            this.setState({
                status: this.props.status,
            })
    }

    render() {
        return (
            <div>
                {(!this.state.editMode) &&
                    <div>
                        <span onDoubleClick={this.activateEditMode}> {this.props.status || "-----"}</span>
                    </div>
                }
                {(this.state.editMode) &&
                    <div>
                        <input autoFocus onChange={(e) => this.onStatusChange(e.target.value)} value={this.state.status} onBlur={this.deactivateEditMode} />
                    </div>
                }
            </div >
        )
    }
}

export default ProfileStatus;