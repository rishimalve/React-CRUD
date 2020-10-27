import React, { Component } from 'react'

export default class DisplayUsers extends Component {

    render() {
        const data = this.props.data
        const deleteUser = this.props.deleteUser
        const editUser = this.props.editUser
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>Name</th>
                            <th>UserName</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row, index) => {
                            return (
                                <tr key={index}>
                                    <td>{row.id}</td>
                                    <td>{row.name}</td>
                                    <td>{row.userName}</td>
                                    <td>
                                        <button onClick={() => deleteUser(row.id)} className="button muted-button">Delete</button>
                                        <button onClick={() => editUser(row)} className="button muted-button">Edit</button>
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