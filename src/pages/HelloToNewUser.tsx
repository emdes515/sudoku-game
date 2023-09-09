import React from 'react'
import InputUsername from '../components/InputUsername'

const HelloToNewUser = () => {
	return (
		<div className="mx-4 flex h-screen flex-col items-center justify-center">
			<h1 className="my-10 animate-flip-up text-center text-3xl font-bold sm:text-5xl">
				Hello to Sudoku
			</h1>
			<InputUsername />
		</div>
	)
}

export default HelloToNewUser
