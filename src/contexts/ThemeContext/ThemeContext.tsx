import React, { useState } from 'react'
import {
	IThemeContextProviderProps,
	IThemeContext,
	TPosibleThemeState,
} from './ThemeContext.types'

export const ThemeContext = React.createContext({} as IThemeContext)

const ThemeContextProvider = ({ children }: IThemeContextProviderProps) => {
	const [theme, setTheme] = useState<TPosibleThemeState>('cupcake')

	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			{children}
		</ThemeContext.Provider>
	)
}

export default ThemeContextProvider
