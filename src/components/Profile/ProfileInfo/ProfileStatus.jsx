import React from 'react';

class ProfileStatus extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        editMode: false,
    }

    toggleActiveMode() {
        this.setState({
            editMode: !this.state.editMode,
        })

    }

    render() {
        return (
            <div>
                {(!this.state.editMode) &&
                    <div>
                        <span onDoubleClick={this.toggleActiveMode.bind(this)}> {this.props.status}</span>
                    </div>
                }
                {(this.state.editMode) &&
                    <div>
                        <input autoFocus type="text" value={this.props.status} onBlur={this.toggleActiveMode.bind(this)} />
                    </div>
                }

                {/* {if (!this.state.editMode){
                    <div>
                        <span>{this.props.status}</span>
                    </div>
                } else {
                    <div>
                        <input type="text" value={this.props.status} />
                    </div>
                }} */}
            </div >
        )
    }
}

export default ProfileStatus;