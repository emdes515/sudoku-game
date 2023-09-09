import { ReactNode } from 'react'
import { posibleThemes } from './themes'

//interface for UserGameContextProvider props
export interface IThemeContextProviderProps {
	children: ReactNode
}

//interface for UserGameContext
export interface IThemeContext {
	theme: string
	setTheme: React.Dispatch<React.SetStateAction<TPosibleThemeState>>
}

//Union type for themes
export type TPosibleThemeState = (typeof posibleThemes)[number]
