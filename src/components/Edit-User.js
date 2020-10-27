import React, { Component } from 'react';

export default class EditUser extends Component {

    user = this.props.currentUser

    initialState = {
        id: null,
        name: '',
        userName: '',
    }

    state = this.user

    submitForm = (event) => {
        event.preventDefault();

        this.props.updateUser(this.user.id, this.state);
        this.setState(this.initialState);
    }

    handleChange = (event) => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        });
    }

    componentDidUpdate(prevProps) {
        if(this.props.currentUser.id !== prevProps.currentUser.id) {
            this.user = this.props.currentUser
            this.setState(this.props.currentUser)
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.submitForm}>
                    <label>Name</label>
                    <input
                        type="text"
                        name="name" id="name" value={this.state.name}
                        onChange={this.handleChange} required/>
                    <label>UserName</label>
                    <input
                        type="text"
                        name="userName" id="userName" value={this.state.userName}
                        onChange={this.handleChange} required/><br />
                    <button type="submit" className="button">Update User</button>
                    <button
                        onClick={() => this.props.setEditing(false)}
                        className="button muted-button"> Cancel
                    </button>
                </form>
            </div>
        )
    }
}