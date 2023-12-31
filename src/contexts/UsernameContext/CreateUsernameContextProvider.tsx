import React, { useState } from 'react'
import {
	ICreateUsernameContext,
	ICreateUsernameContextProviderProps,
	IValidateUsername,
} from './CreateUsernameContext.types'
import { useGameContext } from '../../hooks/contextHooks/useGameContext'

export const CreateUsernameContext = React.createContext(
	{} as ICreateUsernameContext,
)

const CreateUsernameContextProvider = ({
	children,
}: ICreateUsernameContextProviderProps) => {
	const [username, setUsername] = useState<string>('')
	const [usernameVaildated, setUsernameValidated] =
		useState<IValidateUsername>({
			state: 'empty',
			message: 'Let us know your username',
		})
	const { users } = useGameContext()

	const validateUsername = (usernameToValidate: string) => {
		if (usernameToValidate.length < 3)
			return {
				state: false,
				message: 'Yor username must have at least 3 characters',
			}
		if (usernameToValidate.length > 30)
			return { state: false, message: 'Your username is too long' }

		if (
			users.some(
				({ username: existingUsername }) =>
					existingUsername === usernameToValidate,
			)
		)
			return {
				state: false,
				message: `Username ${usernameToValidate} already exists`,
			}

		return { state: true, message: 'Just click enter to set this username' }
	}

	return (
		<CreateUsernameContext.Provider
			value={{
				username,
				setUsername,
				validateUsername,
				usernameVaildated,
				setUsernameValidated,
			}}
		>
			{children}
		</CreateUsernameContext.Provider>
	)
}

export default CreateUsernameContextProvider
