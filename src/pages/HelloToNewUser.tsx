import React from 'react'
import InputUsername from '../components/InputUsername'
import { useUsernameContext } from '../hooks/contextHooks/useUsernameContext'

const HelloToNewUser = () => {
	const {
		usernameVaildated: { state, message },
	} = useUsernameContext()

	return (
		<div className="relative mx-4 flex h-screen flex-col items-center justify-center">
			<h1 className="my-10 text-center text-3xl font-bold sm:text-5xl">
				Hello to Sudoku
			</h1>
			<InputUsername />
			<span
				className={`mt-4 text-center font-semibold ${
					state === 'empty'
						? ''
						: state
						? 'text-green-600'
						: 'text-red-600'
				}`}
			>
				{message}
			</span>
		</div>
	)
}

export default HelloToNewUser
