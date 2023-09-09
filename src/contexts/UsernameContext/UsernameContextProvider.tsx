import React, { useState } from 'react'
import {
	IUsernameContext,
	IUsernameContextProviderProps,
	IValidateUsername,
} from './UsernameContext.types'

export const UsernameContext = React.createContext({} as IUsernameContext)

const UsernameContextProvider = ({
	children,
}: IUsernameContextProviderProps) => {
	const [username, setUsername] = useState<string>('')
	const [usernameVaildated, setUsernameValidated] =
		useState<IValidateUsername>({
			state: 'empty',
			message: 'Let us know your username',
		})

	const validateUsername = (usernameToValidate: string) => {
		if (usernameToValidate.length < 3)
			return {
				state: false,
				message: 'Yor username must have at least 3 characters',
			}
		if (usernameToValidate.length > 30)
			return { state: false, message: 'Your username is too long' }
		return { state: true, message: 'Just click enter to set this username' }
	}

	return (
		<UsernameContext.Provider
			value={{
				username,
				setUsername,
				validateUsername,
				usernameVaildated,
				setUsernameValidated,
			}}
		>
			{children}
		</UsernameContext.Provider>
	)
}

export default UsernameContextProvider
