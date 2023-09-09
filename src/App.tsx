import { Route, Routes } from 'react-router-dom'
import HelloToNewUser from './pages/HelloToNewUser'
import SelectTheme from './components/SelectTheme'
import { useThemeContext } from './hooks/contextHooks/useThemeContext'

function App() {
	const { theme } = useThemeContext()

	return (
		<div data-theme={theme}>
			<SelectTheme />
			<Routes>
				<Route path="/" element={<HelloToNewUser />} />
			</Routes>
		</div>
	)
}

export default App
