import React, { Component } from 'react';

export default class Details extends Component {

    initialState = {
        name: '',
        details: '',
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
        const { name, details } = this.state
        return (
            <div>
                <form onSubmit={this.submitForm}>
                    <input
                        type="text"
                        placeholder="Enter Name"
                        name="name" id="name" value={name}
                        onChange={this.handleChange} /><br />
                    <input
                        type="text"
                        placeholder="Enter Details"
                        name="details" id="details" value={details}
                        onChange={this.handleChange} /><br />
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}