import React, { FC } from 'react';
import { IUser} from '../types/types';
import { findUserMail, validateEmail, validateName } from '../utils/utils';


interface IFormAddingUsers {
	setUser: React.Dispatch<React.SetStateAction<[] | IUser[]>>
	usersList: IUser[]
}

const FormAddingUsers: FC<IFormAddingUsers> = React.memo(({setUser, usersList}) => {

	const [isValidateName, setIsValidateName] = React.useState<boolean>(false)
	const [isValidateMail, setIsValidateMail] = React.useState<boolean>(false)
	const nameRef = React.useRef<null | HTMLInputElement>(null)
	const emailRef = React.useRef<null | HTMLInputElement>(null)
	const USER_ID = React.useRef<number>(0)
	// console.log('render')

	function handleClick() {
		if (nameRef.current && emailRef.current)
			addUser(nameRef.current.value, emailRef.current.value)
	}


	function addUser(name: string, email: string) {
		if (!validateName(name)){
			setIsValidateName(true)
			return
		}
		if(!validateEmail(email)){
			setIsValidateMail(true)
			return
		}
		if(findUserMail(usersList, email) !== undefined)
			console.log(usersList)
		else {
			setUser((prevState) => [...prevState, {
				id: USER_ID.current++,
				name: name,
				email: email
			}])
		}
	}

	return (
		<form className='formUser'>
			<h3>Форма добавления пользователя</h3>
			<div className='formUser_fields container'>
				<input type="text" ref={nameRef}  placeholder='Name: '/>
				{isValidateName ? <span>Некорректное имя</span> : null}
				<input type="email" ref={emailRef} placeholder='Email: '/>
				{isValidateMail ? <span>Неправильный формат почты</span> : null}
				<button type='button' onClick={handleClick}>Добавить</button>
			</div>
		</form>
	);
})
 

export default FormAddingUsers;