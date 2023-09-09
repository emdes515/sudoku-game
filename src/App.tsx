import { Route, Routes } from 'react-router-dom'
import HelloToNewUser from './pages/HelloToNewUser'
import SelectTheme from './components/SelectTheme'
import { useThemeContext } from './hooks/contextHooks/useThemeContext'
import SvaedUsers from './pages/SvaedUsers'
import { isUserInLocalStoarge } from './utilities/isUserInLocalStoarge'
import UsernameContextProvider from './contexts/UsernameContext/UsernameContextProvider'

function App() {
	const { theme } = useThemeContext()

	return (
		<div data-theme={theme}>
			<SelectTheme />
			<Routes>
				<Route
					path="/"
					element={
						isUserInLocalStoarge() ? (
							<SvaedUsers />
						) : (
							<UsernameContextProvider>
								<HelloToNewUser />
							</UsernameContextProvider>
						)
					}
				/>
			</Routes>
		</div>
	)
}

export default App
