import React, { useState } from 'react'
import {
	TThemeContextProviderProps,
	TThemeContext,
	TPosibleThemeState,
} from './ThemeContext.type'

export const ThemeContext = React.createContext({} as TThemeContext)

const ThemeContextProvider = ({ children }: TThemeContextProviderProps) => {
	const [theme, setTheme] = useState<TPosibleThemeState>('cupcake')

	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			{children}
		</ThemeContext.Provider>
	)
}

export default ThemeContextProvider
