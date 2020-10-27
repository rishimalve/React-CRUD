import React, { useState } from 'react';
import AddUser from './components/Add-User';
import DisplayUsers from './components/Display-Users'
import EditUser from './components/Edit-User'

const App = () => {

  const data = []
  const [users, setUsers] = useState(data)
  const [editing, setEditing] = useState(false)

  const addUser = (user) => {
    user.id = users.length + 1
    setUsers([...users, user])
  }

  const initialFormState = { id: null, name: '', userName: '' }
  const [currentUser, setCurrentUser] = useState(initialFormState)

  const deleteUser = (id) => {
    setEditing(false)
    setUsers(users.filter((user) => user.id !== id))
  }

  const editUser = (user) => {
    setEditing(true)
    setCurrentUser({ id: user.id, name: user.name, userName: user.userName })
  }

  const updateUser = (id, updatedUser) => {
    setEditing(false)
    setUsers(users.map((user) => (user.id === id ? updatedUser : user)))
  }

  return (
    <div className="container">
      <h1>React CRUD App with Hooks</h1>
      <header className="App-header">
      </header>
      <div className="flex-row">
        <div className="flex-large">
          {editing ? (
            <div>
              <h2>Edit user</h2>
              <EditUser
                editing={editing}
                setEditing={setEditing}
                currentUser={currentUser}
                updateUser={updateUser}
              />
            </div>
          ) : (
              <div>
                <h2>Add user</h2>
                <AddUser addUser={addUser} />
              </div>
            )}
        </div>
        <div className="flex-large">
          <h2>Users List</h2>
          <DisplayUsers data={users} deleteUser={deleteUser} editUser={editUser} />
        </div>
      </div>
    </div>
  );
}

export default App;