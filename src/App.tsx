import { Route, Routes } from 'react-router-dom'
import HelloToNewUser from './pages/HelloToNewUser'
import { useThemeContext } from './hooks/contextHooks/useThemeContext'
import ChooseUser from './pages/ChooseUser'
import { isAnyUserInLocalStoarge } from './utilities/isAnyUserInLocalStoarge'
import CreateUsernameContextProvider from './contexts/UsernameContext/CreateUsernameContextProvider'
import Dashboard from './pages/Dashboard'

function App() {
	const { theme } = useThemeContext()

	return (
		<div data-theme={theme}>
			<Routes>
				<Route
					path="/"
					element={
						isAnyUserInLocalStoarge() ? (
							<Dashboard />
						) : (
							<CreateUsernameContextProvider>
								<HelloToNewUser />
							</CreateUsernameContextProvider>
						)
					}
				/>
				<Route path="/chooseUser" element={<ChooseUser />} />
			</Routes>
		</div>
	)
}

export default App
