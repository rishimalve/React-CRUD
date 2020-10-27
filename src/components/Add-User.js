import React, { Component } from 'react';

export default class AddUser extends Component {

    initialState = {
        id: null,
        name: '',
        userName: '',
    }

    state = this.initialState

    handleChange = (event) => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        });
    }

    submitForm = (event) => {
        event.preventDefault();

        this.props.addUser(this.state);
        this.setState(this.initialState);
    }

    resetForm = () => {
        this.setState(this.initialState)
    }

    render() {
        const { name, userName } = this.state
        return (
            <div>
                <form onSubmit={this.submitForm} onReset={this.resetForm}>
                    <label>Name</label>
                    <input
                        type="text"
                        name="name" id="name" value={name}
                        onChange={this.handleChange} required/>
                    <label>UserName</label>
                    <input
                        type="text"
                        name="userName" id="userName" value={userName}
                        onChange={this.handleChange} required/><br />
                    <button type="submit" className="button">Add User</button>
                    <button type="reset" className="button muted-button">Cancel</button>
                </form>
            </div>
        )
    }
}