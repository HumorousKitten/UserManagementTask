export interface IUser {
	id: number
	name: string
	email: string
}


export type TAddUserFunc = (name: string, email: string) => void