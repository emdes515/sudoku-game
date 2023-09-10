import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import ThemeContextProvider from './contexts/ThemeContext/ThemeContext.tsx'
import GameContextProvider from './contexts/GameContext/GameContextProvider.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<BrowserRouter>
			<GameContextProvider>
				<ThemeContextProvider>
					<App />
				</ThemeContextProvider>
			</GameContextProvider>
		</BrowserRouter>
	</React.StrictMode>,
)
