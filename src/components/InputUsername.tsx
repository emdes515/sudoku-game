import React, { ChangeEvent } from 'react'
import { useUsernameContext } from '../hooks/contextHooks/useUsernameContext'

const InputUsername = () => {
	const {
		setUsername,
		validateUsername,
		setUsernameValidated,
		usernameVaildated: { state },
	} = useUsernameContext()

	const changeUsernameHandler = ({
		target: { value },
	}: ChangeEvent<HTMLInputElement>) => {
		const validated = validateUsername(value)
		setUsernameValidated(validated)
		if (validated.state) setUsername(value)
	}

	return (
		<form>
			<input
				id="input-username"
				type="text"
				placeholder="username"
				className={`input input-bordered input-lg w-full max-w-xs ${
					state === 'empty'
						? 'input-primary'
						: state
						? 'input-success'
						: 'input-error'
				}`}
				onChange={changeUsernameHandler}
			/>
		</form>
	)
}

export default InputUsername
