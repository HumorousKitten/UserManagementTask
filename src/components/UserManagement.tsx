import React, { FC, ReactElement } from 'react'
import { IUser } from '../types/types'
import { findUserMail } from '../utils/utils'
import ModalUserEditor from './modalUserEditor'


interface IUserManagementProps {
	usersList: IUser[]
	setUser: React.Dispatch<React.SetStateAction<[] | IUser[]>>
}

type TUserWithoutId = Omit<IUser, 'id'>

const UserManagement: FC<IUserManagementProps> = ({usersList, setUser}): ReactElement => {

	const [isUserEdit, setUserEdit] = React.useState<boolean>(false) 
	const defaultUserData = React.useRef<TUserWithoutId>({
		name: '',
		email: ''
	})

	function editUser(e: React.MouseEvent<HTMLButtonElement>){
		defaultUserData.current =  getUserData(e)
		setUserEdit(true)
	}

	function getUserData(e: React.MouseEvent<HTMLButtonElement>): TUserWithoutId {
		const parent = e.currentTarget.closest('.UserManagement_item')
		const name = parent?.children.item(0)?.children.item(0)?.textContent.replace(/^.*\s/, '')
		const email = parent?.children.item(0)?.children.item(1)?.textContent.replace(/^.*\s/, '')

		if(parent){
			return {
				name:  name ?? '',
				email: email ?? ''
			}
		}
		return {
			name:  '',
			email: ''
		}
	}

	function removeUser(e: React.MouseEvent<HTMLButtonElement>) {
		const parent = e.currentTarget.closest('.UserManagement_item')
		const email = parent?.children.item(0)?.children.item(1)?.textContent.replace(/^.*\s/, '')
		if(parent){
			const userId: NonNullable<number | undefined> = findUserMail(usersList, email as string) as number
			
			const newUserList = usersList.filter((item: IUser) => item.id !== userId)
			setUser(newUserList)
		}
	}


	return (
		<div className='UserManagement'>
			<div>
				{usersList ? usersList.map((item: IUser) => (
					<div key={item.id + ":" + item.name} className='UserManagement_item'>
						<div className='item_info'>
							<span>Имя: {item.name}</span>
							<span>Почта: {item.email}</span>
						</div>
						<div className='item_btns'>
							<button onClick={removeUser}>удалить</button>
							<button onClick={editUser}>редактировать</button>
						</div>
					</div>
				)) : null}
			</div>
			{isUserEdit ? <ModalUserEditor defaultName={defaultUserData.current.name} defaultEmail={defaultUserData.current.email} setUser={setUser} userEdit = {setUserEdit}/> : null}
		</div>
	);
}
 
export default UserManagement;