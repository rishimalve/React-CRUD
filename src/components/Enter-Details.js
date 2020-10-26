import React, { Component } from 'react';

export default class Details extends Component {

    initialState = {
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

        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    }

    render() {
        const { name, userName } = this.state
        return (
            <div>
                <form onSubmit={this.submitForm}>
                    <label>Name</label>
                    <input
                        type="text"
                        name="name" id="name" value={name}
                        onChange={this.handleChange} />
                    <label>UserName</label>
                    <input
                        type="text"
                        name="userName" id="userName" value={userName}
                        onChange={this.handleChange} /><br />
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}