import { ReactNode } from 'react'

export interface IUsernameContextProviderProps {
	children: ReactNode
}

export interface IUsernameContext {
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
