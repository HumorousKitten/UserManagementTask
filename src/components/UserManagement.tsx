import React, { FC, ReactElement } from 'react'
import { IUser } from '../types/types'


interface IUserManagementProps {
	usersList: IUser[]
}

const UserManagement: FC<IUserManagementProps> = ({usersList}): ReactElement => {

	function addUser(name: string, email: string) {
		if (!name || !email)
			console.log('mistake') 
		else {
			setUser((prevState) => [...prevState, {
				id: USER_ID.current++,
				name: name,
				email: email
			}])
		}
	}

	// function removeUser() {

	// }

	return (
		<div className='UserManagement'>
			{usersList ? usersList.map((item: IUser) => (
				<div key={item.id + ":" + item.name} style={{ border: "2px solid red" }}>
					<span>{item.name}</span>
					<span>{item.email}</span>
					<button>удалить</button>
				</div>
			)) : null}
		</div>
	);
}
 
export default UserManagement;