import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { useLogin } from './hooks/useLogin'
import HelloToNewUser from './pages/HelloToNewUser'

function App() {

	return (
		<Routes>
			<Route path='/' element={
				<HelloToNewUser />
			}/>
		</Routes>
	)
}

export default App
