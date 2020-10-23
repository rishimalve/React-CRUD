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
    this.setState({data: [...this.state.data, row]})
  }

  render() {

    const data = this.state.data

    return (
      <div className="container">
        <header className="App-header">
        </header>
        <br />
        <Details handleSubmit={this.handleSubmit}/>
        <ShowDetails data={data} removeUser = {this.removeUser} />
      </div>
    );
  }
}

export default App;
