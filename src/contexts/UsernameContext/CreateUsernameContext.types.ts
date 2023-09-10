import { ReactNode } from 'react'

export interface ICreateUsernameContextProviderProps {
	children: ReactNode
}

export interface ICreateUsernameContext {
	username: string
	setUsername: React.Dispatch<React.SetStateAction<string>>
	validateUsername: (usernameToValidate: string) => IValidateUsername
	usernameVaildated: IValidateUsername
	setUsernameValidated: React.Dispatch<
		React.SetStateAction<IValidateUsername>
	>
}

export interface IValidateUsername {
	state: boolean | 'empty'
	message: string
}
