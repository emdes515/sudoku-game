import React from 'react'
import InputUsername from '../components/InputUsername'

const HelloToNewUser = () => {
	return (
		<div className="flex justify-center items-center h-screen flex-col">
			<h1>Hello to Sudoku</h1>
			<InputUsername />
		</div>
	)
}

export default HelloToNewUser
