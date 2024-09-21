import React, { FC } from 'react'
import { IUser } from '../types/types'
import { findUserMail, validateName, validateEmail } from '../utils/utils'

interface IModalUserEditorProps {
	defaultName: string
	defaultEmail: string
	setUser: React.Dispatch<React.SetStateAction<[] | IUser[]>>
	userEdit: React.Dispatch<React.SetStateAction<boolean>>
}


const ModalUserEditor: FC<IModalUserEditorProps> = ({defaultName, defaultEmail, setUser, userEdit}) => {

	const nameRef = React.useRef<null | HTMLInputElement>(null)
	const emailRef = React.useRef<null | HTMLInputElement>(null)
	
	function editUser() {
		if(!nameRef.current.value || !emailRef.current.value)
			return

		if(emailRef.current?.value === defaultEmail)
			return

		
		setUser((prevState) => {
			const userId: NonNullable<number | undefined> = findUserMail(prevState, defaultEmail) as number

			const newStateArray: IUser[] | [] = prevState.map((item: IUser) => {
				console.log(item.id === userId)
				console.log(item.id, userId)
				console.log(typeof item.id, typeof userId)
				if(item.id === userId){
					console.log(item)
					return {...item, name: nameRef.current.value, email: emailRef.current.value}
				}
				else
					return item
			})
			return newStateArray
		})
		userEdit(false)
	}
	
	return (
		<form className='modalForm'>
			<h3>Редактирование пользователя</h3>
			<div className='modalForm_fields container'>
				<input type="text"  ref={nameRef} defaultValue = {defaultName}/>
				<input type="email" ref={emailRef} defaultValue = {defaultEmail}/>
				<button type="button" onClick={editUser}>сохранить</button>
			</div>
		</form>		
	);
}
 
export default ModalUserEditor;