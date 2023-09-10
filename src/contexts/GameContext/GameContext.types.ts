import { ReactNode } from 'react'
import { User } from '../../classes/User'

export interface IGameContextProviderProps {
	children: ReactNode
}

export interface IGameContext {
	users: User[]
	createNewUser: (username: string) => User | Error
	activeUserID: string
	setActiveUserID: (value: string | ((prevValue: string) => string)) => void;
}
