import React from 'react'
import UserManagement from './components/UserManagement'
import FormAddingUsers from './components/FormAddingUsers'
import { IUser} from './types/types'

import './App.css'



function App() {
  const [users, setUsers] = React.useState<IUser[]  | []>([])

  return (
    <div className='app'>
      <UserManagement usersList = {users} setUser = {setUsers}/>
      <FormAddingUsers setUser = {setUsers} usersList = {users}/>
    </div>
  )
}

export default App
