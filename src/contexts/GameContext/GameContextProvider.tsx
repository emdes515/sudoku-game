import React from 'react'
import { User } from '../../classes/User'
import { IGameContext, IGameContextProviderProps } from './GameContext.types'
import { useLocalStorage } from 'usehooks-ts'

export const GameContext = React.createContext({} as IGameContext)

const GameContextProvider = ({ children }: IGameContextProviderProps) => {
	const [gameObject, setGameObject] = useLocalStorage<User[]>('sudoku', [] as User[])

	const createNewUser = (username: string) => {
		if (
			gameObject.some(
				({ username: existingUsername }) =>
					existingUsername === username,
			)
		)
			return new Error(`User ${username} already exists`)

		const newUser = new User(username)

		setGameObject((currentGameObject) => [...currentGameObject, newUser])

    return newUser
	}

	return (
		<GameContext.Provider value={{ gameObject, createNewUser }}>
			{children}
		</GameContext.Provider>
	)
}

export default GameContextProvider
