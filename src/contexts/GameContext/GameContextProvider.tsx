import React, { useEffect } from 'react'
import { User } from '../../classes/User'
import { IGameContext, IGameContextProviderProps } from './GameContext.types'
import { useLocalStorage, useReadLocalStorage } from 'usehooks-ts'
import { useNavigate } from 'react-router-dom'
import { isAnyUserInLocalStoarge } from '../../utilities/isAnyUserInLocalStoarge'

export const GameContext = React.createContext({} as IGameContext)

const GameContextProvider = ({ children }: IGameContextProviderProps) => {
	const [users, setUsers] = useLocalStorage<User[]>('users', [] as User[])

	const [activeUserID, setActiveUserID] = useLocalStorage<string>(
		'active-user-id',
		'',
	)

	const navigate = useNavigate()

	useEffect(() => {
		activeUserID && isAnyUserInLocalStoarge()
			? navigate('/dashboard')
			: navigate('/')
	}, [activeUserID, users])

	const createNewUser = (username: string) => {
		if (
			users.some(
				({ username: existingUsername }) =>
					existingUsername === username,
			)
		)
			return new Error(`User ${username} already exists`)

		const newUser = new User(username)

		setUsers((currentGameObject) => [...currentGameObject, newUser])

		setActiveUserID(newUser.id)

		return newUser
	}

	return (
		<GameContext.Provider
			value={{ users, createNewUser, activeUserID, setActiveUserID }}
		>
			{children}
		</GameContext.Provider>
	)
}

export default GameContextProvider
