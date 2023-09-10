import { Route, Routes } from 'react-router-dom'
import HelloToNewUser from './pages/HelloToNewUser'
import { useThemeContext } from './hooks/contextHooks/useThemeContext'
import SvaedUsers from './pages/chooseUser'
import { isAnyUserInLocalStoarge } from './utilities/isAnyUserInLocalStoarge'
import CreateUsernameContextProvider from './contexts/UsernameContext/CreateUsernameContextProvider'

function App() {
	const { theme } = useThemeContext()

	return (
		<div data-theme={theme}>
			<Routes>
				<Route
					path="/"
					element={
						isAnyUserInLocalStoarge() ? (
							<SvaedUsers />
						) : (
							<CreateUsernameContextProvider>
								<HelloToNewUser />
							</CreateUsernameContextProvider>
						)
					}
				/>
				<Route path="/chooseUser" element={<SvaedUsers />} />
			</Routes>
		</div>
	)
}

export default App
