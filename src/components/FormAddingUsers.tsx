import React, { FC } from 'react';
import { IUser } from '../types/types';

interface IFormAddingUsers {
	setUser: React.Dispatch<React.SetStateAction<[] | IUser[]>>
}

const FormAddingUsers: FC<IFormAddingUsers> = ({setUser}) => {
	const nameRef = React.useRef<null | HTMLInputElement>(null)
	const emailRef = React.useRef<null | HTMLInputElement>(null)
	const USER_ID = React.useRef(0)

	function handleClick() {
		if (nameRef.current && emailRef.current)
			addUser(nameRef.current.value, emailRef.current.value)
	}

	return (
		<form className='formAddUsers'>
			<input type="text" ref={nameRef} style={{border: '1px solid black'}} />
			<input type="email" ref={emailRef} style={{border: '1px solid black'}}/>
			<button type='button' onClick={handleClick}>Добавить</button>
		</form>
	);
}
 
export default FormAddingUsers;