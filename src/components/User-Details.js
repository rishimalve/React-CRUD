import React, { Component } from 'react'

export default class ShowDetails extends Component {

    render() {
        const data = this.props.data
        const removeUser = this.props.removeUser
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Details</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row, index) => {
                            return (
                                <tr key={index}>
                                    <td>{row.name}</td>
                                    <td>{row.details}</td>
                                    <td>
                                        <button onClick={() => removeUser(index)}>
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}