import { IUser } from '../types/types'

export function findUserMail(userList: IUser[] , email: string): number | undefined {
	console.log(userList, email)
	return userList.find((item: IUser) => item.email === email)?.id
}

export function validateEmail(email: string): boolean {
	const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
	return emailRegex.test(email)
}

export function validateName(name: string): boolean {
	const nameRegex: RegExp = /^(?:[a-zA-Zа-яА-ЯёЁ]{2,40}\s?){1,2}$/
	return nameRegex.test(name)
}