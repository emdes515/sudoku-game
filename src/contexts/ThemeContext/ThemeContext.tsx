import React from 'react'
import {
	IThemeContextProviderProps,
	IThemeContext,
	TPosibleThemeState,
} from './ThemeContext.types'
import { useLocalStorage } from 'usehooks-ts'

export const ThemeContext = React.createContext({} as IThemeContext)

const ThemeContextProvider = ({ children }: IThemeContextProviderProps) => {
	const [theme, setTheme] = useLocalStorage<TPosibleThemeState>(
		'theme',
		'night',
	)

	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			{children}
		</ThemeContext.Provider>
	)
}

export default ThemeContextProvider
