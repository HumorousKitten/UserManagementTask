import React from 'react'
import UserManagement from './components/UserManagement'
import FormAddingUsers from './components/formAddingUsers'
import { IUser } from './types/types'

//Todo: 
// 1 перетащить функцию удаления пользователя в компонент пользователей
//реализовать проверку на наличие введеного емайл


function App() {
  const [users, setUsers] = React.useState<IUser[]  | []>([])
  console.log(users)
  return (
    <div className='app'>
      <UserManagement usersList = {users} />
      <FormAddingUsers setUser = {setUsers} />
    </div>
  )
}

export default App
