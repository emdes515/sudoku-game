import React, { ChangeEvent } from 'react'
import { posibleThemes } from '../contexts/ThemeContext/themes'
import { TPosibleThemeState } from '../contexts/ThemeContext/ThemeContext.type'
import { useThemeContext } from '../hooks/contextHooks/useThemeContext'

const SelectTheme = () => {
	const { setTheme } = useThemeContext()

	const setSelcetThemeHandler = ({
		target: { value },
	}: ChangeEvent<HTMLSelectElement>) => {
		setTheme(value as TPosibleThemeState)
	}

	return (
		<select
			onChange={setSelcetThemeHandler}
			className="select select-primary select-sm absolute right-5 top-5 w-full max-w-[10rem]"
		>
			<option disabled selected>
				Select Theme
			</option>
			{posibleThemes.map((posibleTheme) => (
				<option key={posibleTheme}>{posibleTheme}</option>
			))}
		</select>
	)
}

export default SelectTheme
