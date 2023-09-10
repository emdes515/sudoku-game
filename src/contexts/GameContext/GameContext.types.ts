import { ReactNode } from 'react'
import { User } from '../../classes/User'

export interface IGameContextProviderProps {
	children: ReactNode
}

export interface IGameContext {
	gameObject: User[]
    createNewUser: (username: string) => User | Error
}
