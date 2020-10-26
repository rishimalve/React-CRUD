import React, { Component } from 'react';
import AddUser from './components/Add-User';
import DisplayUsers from './components/Display-Users'

class App extends Component {

  state = {
    data: [

    ],
  }

  removeUser = (index) => {
    const { data } = this.state

    this.setState({
      data: data.filter((d, i) => {
        return i !== index
      }),
    })
  }

  handleSubmit = (row) => {
    this.setState({ data: [...this.state.data, row] })
  }

  render() {

    const data = this.state.data

    return (
      <div className="container">
        <h1>React CRUD App</h1>
        <header className="App-header">
        </header>
        <br />
        <div className="flex-row">
          <div className="flex-large">
            <h2>Add User</h2>
            <AddUser handleSubmit={this.handleSubmit} />
          </div>
          <div className="flex-large">
            <h2>Users List</h2>
            <DisplayUsers data={data} removeUser={this.removeUser} />
          </div>
        </div>


      </div>
    );
  }
}

export default App;
