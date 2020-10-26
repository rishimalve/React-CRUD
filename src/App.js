import React, { Component } from 'react';
import Details from './components/Enter-Details';
import ShowDetails from './components/User-Details'

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
            <Details handleSubmit={this.handleSubmit} />
          </div>
          <div className="flex-large">
            <h2>Users List</h2>
            <ShowDetails data={data} removeUser={this.removeUser} />
          </div>
        </div>


      </div>
    );
  }
}

export default App;
